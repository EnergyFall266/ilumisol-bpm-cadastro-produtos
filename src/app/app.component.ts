import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as ngapi from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as fd from 'src/functions/Form_Design';
import * as wc from 'src/functions/Workflow_Cockpit';
import { Data, Info } from 'src/beans/Workflow';
import axios from 'axios';
import { AppService } from './app.service';
import FormValidate from 'src/functions/Form_Validate';
import { Messages } from 'primeng/messages';
import { environment } from 'src/environments/environment';

declare var workflowCockpit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ngapi.MessageService, FormValidate],
})
export class AppComponent {
  @ViewChild(Messages) msg!: Messages;

  public title = 'cadastro_produto';
  public version = environment.version;

  public menus: ngapi.MenuItem[] = fd.menus;
  public activeMenu: ngapi.MenuItem = {};
  public panel = fd.panels;

  public vp: VP_BPM = new VP_BPM();

  constructor(
    private ap: AppService,
    private messageService: ngapi.MessageService,
    private translate: TranslateService,
    private primeNGConfig: ngapi.PrimeNGConfig,
    private formValidate: FormValidate
  ) {
    new workflowCockpit({
      init: this._loadData,
      onSubmit: this._saveData,
      onError: this._rollback,
    });

    translate.addLangs(['pt']);
    translate.setDefaultLang('pt');
    translate.use('pt');
    this.translate
      .stream('primeng')
      .subscribe((data: ngapi.Translation) =>
        this.primeNGConfig.setTranslation(data)
      );
  }

  public ngOnInit(): void {
    axios.interceptors.request.use(
      (config) => {
        this.vp.buscandoWS = true;
        return config;
      },
      (error) => {
        this.vp.buscandoWS = false;
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response) => {
        this.vp.buscandoWS = false;
        return response;
      },
      (error) => {
        if (error.response.data) {
          const e = error.response.data;
          if (e.errorCode && e.errorCode != 'entity_already_exists')
            this.messageService.add({
              severity: 'error',
              summary: 'Web service error',
              detail: e.errorMessage,
              life: 5000,
            });
          else
            this.messageService.add({
              severity: 'error',
              summary: 'Web service error',
              detail: e.msgRet ?? e.message ?? error.message,
              life: 5000,
            });
        }
        this.vp.buscandoWS = false;
        this.vp.overlay = false;
        return Promise.reject(error);
      }
    );

    this.primeNGConfig.ripple = true;
    /*this.vp.overlay = false;
    this.vp.c1_empresa_cod = 1;
    this.vp.c1_empresa_nom = 'a';
    this.activeMenu = fd.showMenus(1, [1, 2, 3]);*/
  }

  private _loadData = async (data: Data, info: Info) => {
    const r = await wc.loadData(this.vp, info);
    this.activeMenu = fd.showMenus(r.initial, r.tabs);
    this.vp = r.vp;
    this.vp.ged_pasta_processo_nome = `Fluxo ${data.processInstanceId}`;
    this.vp.overlay = false;
  };

  private _saveData = async (data: Data, _info: Info) => {
    this.vp.ged_pasta_processo_nome = `Fluxo ${data.processInstanceId}`;

    this.formValidate.salvarDados(this.vp);
    this.vp.alertas = this.msg.messages == null ? [] : this.msg.messages;

    if (this.vp.alertas.length > 0)
      throw Error('Os dados informados são inválidos.');
    return wc.saveData(this.vp);
  };

  private _rollback = wc.rollback;

  public cadastrarProduto = async () => {
    this.vp.overlay = true;

    this.formValidate.cadastrarProduto(this.vp);
    this.vp.alertas = this.msg.messages == null ? [] : this.msg.messages;

    if (this.vp.alertas.length == 0) {
      const c = await this.ap.cadastroService(this.vp);
      if (c.produto) {
        const p = Array.isArray(c.produto) ? c.produto[0] : c.produto;
        this.vp.c7_mensagem_retorno = p.msgRetorno + '';
        if (p.retorno) {
          const r = Array.isArray(p.retorno) ? p.retorno[0] : p.retorno;
          if (p.msgRetorno != 'OK')
            this.vp.c7_mensagem_retorno += `\n\nDetalhe: ${r.desRet}`;
          this.vp.c7_codigo_produto = r.codPro + '';
        }
      }
    }

    this.vp.overlay = false;
  };

  a = () => console.dir(this.vp);
}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as fd from 'src/functions/Form_Design';
import formValidate from 'src/functions/Form_Validate';
import * as wc from 'src/functions/Workflow_Cockpit';
import { Data, Info } from 'src/beans/Workflow';
import axios from 'axios';
import { G5Response } from 'src/beans/WS_Beans';

declare var workflowCockpit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent {
  public title = 'cadastro_produto';

  public menus: MenuItem[] = fd.Menus;
  public activeMenu: MenuItem = {};
  public panel = fd.Panels;
  public hideButtons: boolean = false;

  public vp: VP_BPM = new VP_BPM();

  constructor(
    private messageService: MessageService,
    public translate: TranslateService,
    public primeNGConfig: PrimeNGConfig
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
      .subscribe((data) => this.primeNGConfig.setTranslation(data));
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
          const e = error.response.data as G5Response;
          this.messageService.add({
            severity: 'error',
            summary: 'Web service error',
            detail: e.errorMessage,
            sticky: true,
          });
        }
        this.vp.buscandoWS = false;
        return Promise.reject(error);
      }
    );

    this.vp.overlay = false;
    this.activeMenu = fd.showMenus(1, [1, 2, 3, 4, 5, 6]);
    this.primeNGConfig.ripple = true;
  }

  private _loadData = async (_data: Data, info: Info): Promise<void> => {
    const r = await wc.loadData(this.vp, info);
    this.activeMenu = fd.showMenus(r.initial, r.tabs);
    this.vp = r.vp;
    this.vp.overlay = false;
  };

  private _saveData = (data: any, info: any): any => {
    this.vp.alertas = formValidate(this.vp);
    throw Error('Os dados informados são inválidos.');
    /*if (this.vp.alertas.length > 0)
      throw Error('Os dados informados são inválidos.');
    else return wc.saveData(this.vp);*/
  };

  private _rollback = wc.rollback;

  a = () => console.dir(this.vp);
}

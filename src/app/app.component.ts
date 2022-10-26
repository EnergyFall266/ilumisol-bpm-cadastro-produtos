import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as fd from 'src/functions/Form_Design';
import formValidate from 'src/functions/Form_Validate';
import * as wc from 'src/functions/Workflow_Cockpit';
import { Data, Info } from 'src/beans/Workflow';
import axios from 'axios';

declare var workflowCockpit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'cadastro_produto';

  public menus: MenuItem[] = fd.Menus;
  public activeMenu: MenuItem = {};
  public panel = fd.Panels;
  public hideButtons: boolean = false;

  public vp: VP_BPM = new VP_BPM();

  constructor(
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
        this.vp.overlay = true;
        return config;
      },
      (error) => {
        this.vp.overlay = false;
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response) => {
        this.vp.overlay = false;
        return response;
      },
      (error) => {
        this.vp.overlay = false;
        return Promise.reject(error);
      }
    );

    this.vp.overlay = false;
    this.activeMenu = fd.showMenus(1, [1, 2, 3, 4, 5, 6]);
  }

  private _loadData = async (_data: Data, info: Info): Promise<void> => {
    const r = await wc.loadData(this.vp, info);
    this.activeMenu = fd.showMenus(r.initial, r.tabs);
    this.vp = r.vp;
  };

  private _saveData = (data: any, info: any): any => {
    console.dir(data);
    console.dir(info);
    this.vp.alertas = formValidate(this.vp);
    throw Error('Os dados informados são inválidos.');
    /*if (this.vp.alertas.length > 0)
      throw Error('Os dados informados são inválidos.');
    else return wc.saveData(this.vp);*/
  };

  private _rollback = wc.rollback;

  a = () => console.dir(this.vp);
}

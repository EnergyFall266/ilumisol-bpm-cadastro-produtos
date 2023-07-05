import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaOrigens } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c4-origem',
  templateUrl: './t1-c4-origem.component.html',
  styleUrls: ['./t1-c4-origem.component.scss'],
})
export class T1C4OrigemComponent {
  /*@Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async origemInput() {
    this.mostrar_modal = true;
    if (this.vp.t1_c4_origem_arr.length == 0) {
      this.vp.t1_c4_origem_arr = (
        (await this.ap.exportaServico(
          'ExportaOrigens',
          JSON.stringify({ codEmp: this.vp.c1_empresa_cod })
        )) as ExportaOrigens[]
      ).map<ExportaOrigens>((l) => ({
        codOri: l.codOri + '',
        desOri: l.desOri,
      }));
      if (this.vp.t1_c4_origem_cod != '')
        this.vp.t1_c4_origem_obj = this.vp.t1_c4_origem_arr.find(
          (x) => x.codOri == this.vp.t1_c4_origem_cod
        );
    }
  }

  public origemSelect() {
    this.vp.t1_c4_origem_cod = this.vp.t1_c4_origem_obj!.codOri;
    this.vp.t1_c4_origem_des = this.vp.t1_c4_origem_obj!.desOri;
    this.mostrar_modal = false;
  }

  public origemClear() {
    this.vp.t1_c4_origem_obj = undefined;
    this.vp.t1_c4_origem_cod = '';
    this.vp.t1_c4_origem_des = '';
  }*/
}

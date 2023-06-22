import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t5-c5-conversao3',
  templateUrl: './t5-c5-conversao3.component.html',
  styleUrls: ['./t5-c5-conversao3.component.scss'],
})
export class T5C5Conversao3Component {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async tcu3Input() {
    if (!this.vp.t5_req_to_read) {
      this.mostrar_modal = true;
      if (this.vp.t5_conversao_arr.length == 0) {
        this.vp.t5_conversao_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LTipCnv'
        )) as ExportaValorLista[];
        if (this.vp.t5_c5_conversao3_cod != '')
          this.vp.t5_c5_conversao3_obj =
            this.vp.t5_conversao_arr.find(
              (x) => x.chvLis == this.vp.t5_c5_conversao3_cod
            );
      }
    }
  }

  public tcu3Select() {
    this.vp.t5_c5_conversao3_cod = this.vp.t5_c5_conversao3_obj!.chvLis;
    this.vp.t5_c5_conversao3_des = this.vp.t5_c5_conversao3_obj!.desLis;
    this.mostrar_modal = false;
  }

  public tcu3Clear() {
    this.vp.t5_c5_conversao3_obj = undefined;
    this.vp.t5_c5_conversao3_cod = '';
    this.vp.t5_c5_conversao3_des = '';
  }
}

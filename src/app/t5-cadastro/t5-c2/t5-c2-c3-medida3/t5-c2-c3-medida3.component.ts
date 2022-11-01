import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t5-c2-c3-medida3',
  templateUrl: './t5-c2-c3-medida3.component.html',
  styleUrls: ['./t5-c2-c3-medida3.component.scss'],
})
export class T5C2C3Medida3Component implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async tcu3Input() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t5_c2_tipo_conversao_arr.length == 0) {
        this.vp.t5_c2_tipo_conversao_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LTipCnv'
        )) as ExportaValorLista[];
        if (this.vp.t5_c2_c3_med_3_tip_cod != '')
          this.vp.t5_c2_c3_med_3_tip_obj =
            this.vp.t5_c2_tipo_conversao_arr.find(
              (x) => x.chvLis == this.vp.t5_c2_c3_med_3_tip_cod
            );
      }
    }
  }

  public tcu3Select() {
    this.vp.t5_c2_c3_med_3_tip_cod = this.vp.t5_c2_c3_med_3_tip_obj!.chvLis;
    this.vp.t5_c2_c3_med_3_tip_des = this.vp.t5_c2_c3_med_3_tip_obj!.desLis;
    this.mostrar_modal = false;
  }
}

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

  public mostrar_modalTc3: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async tcu3Input() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.mostrar_modalTc3 = true;
      if (this.vp.t5_c2_c3_med_3_tip_arr.length == 0) {
        this.vp.t5_c2_c3_med_3_tip_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LTipCnv'
        )) as ExportaValorLista[];
      }
    }
  }

  public tcu3Select() {
    this.vp.t5_c2_c1_med_3_cod = this.vp.t5_c2_c3_med_3_tip_obj!.chvLis;
    this.mostrar_modalTc3 = false;
  }
}

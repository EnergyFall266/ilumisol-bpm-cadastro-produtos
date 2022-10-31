import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c3-c1-enqua',
  templateUrl: './t6-c3-c1-enqua.component.html',
  styleUrls: ['./t6-c3-c1-enqua.component.scss'],
})
export class T6C3C1EnquaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async enquaInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t6_c3_c1_enq_esp_arr.length == 0)
        this.vp.t6_c3_c1_enq_esp_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LProEpe'
        )) as ExportaValorLista[];
    }
  }

  public enquaSelect() {
    this.vp.t6_c3_c1_enq_esp_cod = this.vp.t6_c3_c1_enq_esp_obj!.chvLis;
    this.vp.t6_c3_c1_enq_esp_des = this.vp.t6_c3_c1_enq_esp_obj!.desLis;
    this.mostrar_modal = false;
  }
}

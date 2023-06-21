import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaAgrupamentos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c8-agr-comercial',
  templateUrl: './t1-c8-agr-comercial.component.html',
  styleUrls: ['./t1-c8-agr-comercial.component.scss']
})
export class T1C8AgrComercialComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async comercialInput() {
    if (!this.vp.t1_req_to_read) {
      this.mostrar_modal = true;
      if (this.vp.t1_c8_agrcomercial_arr.length == 0) {
        this.vp.t1_c8_agrcomercial_arr = (await this.ap.exportaServico(
          'ExportaAgrupamentos',
          'C'
        )) as ExportaAgrupamentos[];
        if (this.vp.t1_c8_agrcomercial_cod != '')
          this.vp.t1_c8_agrcomercial_obj =
            this.vp.t1_c8_agrcomercial_arr.find(
              (x) => x.codAgp == this.vp.t1_c8_agrcomercial_cod
            );
      }
    }
  }

  public comercialSelect() {
    this.vp.t1_c8_agrcomercial_cod = this.vp.t1_c8_agrcomercial_obj!.codAgp;
    this.vp.t1_c8_agrcomercial_des = this.vp.t1_c8_agrcomercial_obj!.desAgp;
    this.mostrar_modal = false;
  }

  public comercialClear() {
    this.vp.t1_c8_agrcomercial_obj = undefined;
    this.vp.t1_c8_agrcomercial_cod = '';
    this.vp.t1_c8_agrcomercial_des = '';
  }
}

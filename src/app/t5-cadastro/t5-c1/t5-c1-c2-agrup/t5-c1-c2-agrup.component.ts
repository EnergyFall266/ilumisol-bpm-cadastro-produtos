import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaAgrupamentos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t5-c1-c2-agrup',
  templateUrl: './t5-c1-c2-agrup.component.html',
  styleUrls: ['./t5-c1-c2-agrup.component.scss'],
})
export class T5C1C2AgrupComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalEst: boolean = false;
  public showModalCus: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async estoquesInput() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalEst = true;
      if (this.vp.t5_c1_c2_agr_est_arr.length == 0) {
        this.vp.t5_c1_c2_agr_est_arr = (await this.ap.exportaServico(
          'ExportaAgrupamentos',
          'E'
        )) as ExportaAgrupamentos[];
      }
    }
  }

  public estoquesSelect() {
    this.vp.t5_c1_c2_agr_est_cod = this.vp.t5_c1_c2_agr_est_obj!.codAgp;
    this.showModalEst = false;
  }

  public async custosInput() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalCus = true;
      if (this.vp.t5_c1_c2_agr_cus_arr.length == 0) {
        this.vp.t5_c1_c2_agr_cus_arr = (await this.ap.exportaServico(
          'ExportaAgrupamentos',
          'U'
        )) as ExportaAgrupamentos[];
      }
    }
  }

  public custosSelect() {
    this.vp.t5_c1_c2_agr_cus_cod = this.vp.t5_c1_c2_agr_cus_obj!.codAgp;
    this.showModalCus = false;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaAgrupamentos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c10-agr-custo',
  templateUrl: './t1-c10-agr-custo.component.html',
  styleUrls: ['./t1-c10-agr-custo.component.scss']
})
export class T1C10AgrCustoComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_est: boolean = false;
  public mostrar_modal_cus: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async custosInput() {
    if (!this.vp.t5_req_to_read) {
      this.mostrar_modal_cus = true;
      if (this.vp.t1_c10_agrcusto_arr.length == 0) {
        this.vp.t1_c10_agrcusto_arr = (await this.ap.exportaServico(
          'ExportaAgrupamentos',
          'U'
        )) as ExportaAgrupamentos[];
        if (this.vp.t1_c10_agrcusto_cod != '')
          this.vp.t1_c10_agrcusto_obj = this.vp.t1_c10_agrcusto_arr.find(
            (x) => x.codAgp == this.vp.t1_c10_agrcusto_cod
          );
      }
    }
  }

  public custosSelect() {
    this.vp.t1_c10_agrcusto_cod = this.vp.t1_c10_agrcusto_obj!.codAgp;
    this.vp.t1_c10_agrcusto_des = this.vp.t1_c10_agrcusto_obj!.desAgp;
    this.mostrar_modal_cus = false;
  }

  public custosClear() {
    this.vp.t1_c10_agrcusto_obj = undefined;
    this.vp.t1_c10_agrcusto_cod = '';
    this.vp.t1_c10_agrcusto_des = '';
  }
}

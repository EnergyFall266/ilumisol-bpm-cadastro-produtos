import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaAgrupamentos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c2-c4-comercial',
  templateUrl: './t1-c2-c4-comercial.component.html',
  styleUrls: ['./t1-c2-c4-comercial.component.scss'],
})
export class T1C2C4ComercialComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalCom: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async comercialInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalCom = true;
      if (this.vp.t1_c2_c4_agrupamento_arr.length == 0)
        this.vp.t1_c2_c4_agrupamento_arr = (await this.ap.exportaServico(
          'ExportaAgrupamentos',
          'C'
        )) as ExportaAgrupamentos[];
    }
  }

  public comercialSelect() {
    this.vp.t1_c2_c4_agrupamento_cod = this.vp.t1_c2_c4_agrupamento_obj!.codAgp;
    this.vp.t1_c2_c4_agrupamento_des = this.vp.t1_c2_c4_agrupamento_obj!.desAgp;
    this.showModalCom = false;
  }
}

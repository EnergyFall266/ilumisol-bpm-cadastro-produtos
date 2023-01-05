import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaClaFis } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c2-c2-fiscal',
  templateUrl: './t1-c2-c2-fiscal.component.html',
  styleUrls: ['./t1-c2-c2-fiscal.component.scss'],
})
export class T1C2C2FiscalComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async fiscalInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t1_c2_c2_clafiscal_arr.length == 0) {
        this.vp.t1_c2_c2_clafiscal_arr = (await this.ap.exportaServico(
          'ExportaClaFis'
        )) as ExportaClaFis[];
        if (this.vp.t1_c2_c2_clafiscal_cod != '')
          this.vp.t1_c2_c2_clafiscal_obj = this.vp.t1_c2_c2_clafiscal_arr.find(
            (x) => x.codClf == this.vp.t1_c2_c2_clafiscal_cod
          );
      }
    }
  }

  public fiscalSelect() {
    this.vp.t1_c2_c2_clafiscal_cod = this.vp.t1_c2_c2_clafiscal_obj!.codClf;
    this.vp.t1_c2_c2_clafiscal_des = this.vp.t1_c2_c2_clafiscal_obj!.desClf;
    this.mostrar_modal = false;
  }

  public fiscalClear() {
    this.vp.t1_c2_c2_clafiscal_obj = undefined;
    this.vp.t1_c2_c2_clafiscal_cod = '';
    this.vp.t1_c2_c2_clafiscal_des = '';
  }
}

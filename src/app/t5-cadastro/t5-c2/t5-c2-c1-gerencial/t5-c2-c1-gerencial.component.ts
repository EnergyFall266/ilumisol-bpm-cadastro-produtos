import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaUniMeds } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t5-c2-c1-gerencial',
  templateUrl: './t5-c2-c1-gerencial.component.html',
  styleUrls: ['./t5-c2-c1-gerencial.component.scss'],
})
export class T5C2C1GerencialComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalUn2: boolean = false;
  public showModalUn3: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async uni2Input() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalUn2 = true;
      if (this.vp.t5_c2_c1_med_2_arr.length == 0) {
        this.vp.t5_c2_c1_med_2_arr = (await this.ap.exportaServico(
          'ExportaUniMeds'
        )) as ExportaUniMeds[];
      }
    }
  }

  public uni2Select() {
    this.vp.t5_c2_c1_med_2_cod = this.vp.t5_c2_c1_med_2_obj!.desMed;
    this.showModalUn2 = false;
  }

  public async uni3Input() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalUn3 = true;
      if (this.vp.t5_c2_c1_med_3_arr.length == 0) {
        this.vp.t5_c2_c1_med_3_arr = (await this.ap.exportaServico(
          'ExportaUniMeds'
        )) as ExportaUniMeds[];
      }
    }
  }

  public uni3Select() {
    this.vp.t5_c2_c1_med_3_cod = this.vp.t5_c2_c1_med_3_obj!.desMed;
    this.showModalUn3 = false;
  }
}

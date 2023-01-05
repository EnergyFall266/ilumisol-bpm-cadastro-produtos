import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaClasseRisco } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c4-c2-risco',
  templateUrl: './t1-c4-c2-risco.component.html',
  styleUrls: ['./t1-c4-c2-risco.component.scss'],
})
export class T1C4C2RiscoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async riscoInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t1_c4_c2_risco_arr.length == 0) {
        this.vp.t1_c4_c2_risco_arr = (await this.ap.exportaServico(
          'ExportaClasseRisco',
        )) as ExportaClasseRisco[];
        if (this.vp.t1_c4_c2_risco_cod != '')
          this.vp.t1_c4_c2_risco_obj =
            this.vp.t1_c4_c2_risco_arr.find(
              (x) => x.codCri == this.vp.t1_c4_c2_risco_cod
            );
      }
    }
  }

  public riscoSelect() {
    this.vp.t1_c4_c2_risco_cod = this.vp.t1_c4_c2_risco_obj!.codCri;
    this.vp.t1_c4_c2_risco_des = this.vp.t1_c4_c2_risco_obj!.desCri;
    this.mostrar_modal = false;
  }

  public riscoClear() {
    this.vp.t1_c4_c2_risco_obj = undefined;
    this.vp.t1_c4_c2_risco_cod = '';
    this.vp.t1_c4_c2_risco_des = '';
  }
}

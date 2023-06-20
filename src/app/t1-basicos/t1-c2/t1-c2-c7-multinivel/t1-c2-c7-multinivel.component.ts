import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaAgrupamentos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c2-c7-multinivel',
  templateUrl: './t1-c2-c7-multinivel.component.html',
  styleUrls: ['./t1-c2-c7-multinivel.component.scss'],
})
export class T1C2C7MultinivelComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async multinivelInput() {
    if (!this.vp.t1_req_to_read) {
      this.mostrar_modal = true;
      if (this.vp.t1_c2_c7_multinivel_arr.length == 0) {
        this.vp.t1_c2_c7_multinivel_arr = (await this.ap.exportaServico(
          'ExportaAgrupamentos',
          'A'
        )) as ExportaAgrupamentos[];
        if (this.vp.t1_c2_c7_multinivel_cod != '')
          this.vp.t1_c2_c7_multinivel_obj =
            this.vp.t1_c2_c7_multinivel_arr.find(
              (x) => x.codAgp == this.vp.t1_c2_c7_multinivel_cod
            );
      }
    }
  }

  public multinivelSelect() {
    this.vp.t1_c2_c7_multinivel_cod = this.vp.t1_c2_c7_multinivel_obj!.codAgp;
    this.mostrar_modal = false;
  }

  public multinivelClear() {
    this.vp.t1_c2_c7_multinivel_obj = undefined;
    this.vp.t1_c2_c7_multinivel_cod = '';
  }
}

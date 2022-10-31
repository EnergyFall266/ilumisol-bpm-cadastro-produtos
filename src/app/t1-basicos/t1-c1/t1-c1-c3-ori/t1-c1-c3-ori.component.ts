import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaOrigens } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c1-c3-ori',
  templateUrl: './t1-c1-c3-ori.component.html',
  styleUrls: ['./t1-c1-c3-ori.component.scss'],
})
export class T1C1C3OriComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async origemInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t1_c1_c3_origem_arr.length == 0)
        this.vp.t1_c1_c3_origem_arr = (await this.ap.exportaServico(
          'ExportaOrigens'
        )) as ExportaOrigens[];
    }
  }

  public origemSelect() {
    this.vp.t1_c1_c3_origem_cod = this.vp.t1_c1_c3_origem_obj!.codOri;
    this.vp.t1_c1_c3_origem_des = this.vp.t1_c1_c3_origem_obj!.desOri;
    this.mostrar_modal = false;
  }
}

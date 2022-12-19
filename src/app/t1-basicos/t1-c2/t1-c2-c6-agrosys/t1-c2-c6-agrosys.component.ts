import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c2-c6-agrosys',
  templateUrl: './t1-c2-c6-agrosys.component.html',
  styleUrls: ['./t1-c2-c6-agrosys.component.scss'],
})
export class T1C2C6AgrosysComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async agrosysInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t1_c2_c6_agrosys_arr.length == 0) {
        this.vp.t1_c2_c6_agrosys_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'USU_LOriAgs'
        )) as ExportaValorLista[];
        if (this.vp.t1_c2_c6_agrosys_cod != '')
          this.vp.t1_c2_c6_agrosys_obj = this.vp.t1_c2_c6_agrosys_arr.find(
            (x) => x.chvLis == this.vp.t1_c2_c6_agrosys_cod
          );
      }
    }
  }

  public agrosysSelect() {
    this.vp.t1_c2_c6_agrosys_cod = this.vp.t1_c2_c6_agrosys_obj!.chvLis;
    this.vp.t1_c2_c6_agrosys_des = this.vp.t1_c2_c6_agrosys_obj!.desLis;
    this.mostrar_modal = false;
  }
}

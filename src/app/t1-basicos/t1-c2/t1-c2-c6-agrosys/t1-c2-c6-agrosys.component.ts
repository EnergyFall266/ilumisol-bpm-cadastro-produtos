import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaProAgs } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c2-c6-agrosys',
  templateUrl: './t1-c2-c6-agrosys.component.html',
  styleUrls: ['./t1-c2-c6-agrosys.component.scss'],
})
export class T1C2C6AgrosysComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;
  public buscando: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async agrosysInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t1_c2_c6_agrosys_arr.length == 0) {
        this.buscando = true;
        this.vp.t1_c2_c6_agrosys_arr = (await this.ap.exportaServico(
          'ExportaProAgs'
        )) as ExportaProAgs[];
        this.buscando = false;
      }
    }
  }

  public agrosysSelect() {
    this.vp.t1_c2_c6_agrosys_cod = this.vp.t1_c2_c6_agrosys_obj!.proAgs;
    this.mostrar_modal = false;
  }
}

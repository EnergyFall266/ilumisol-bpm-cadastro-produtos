import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaDepositos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t3-c1',
  templateUrl: './t3-c1.component.html',
  styleUrls: ['./t3-c1.component.scss'],
})
export class T3C1Component implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async depositoInput() {
    if (!this.vp.t3_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t3_c1_destino_arr.length == 0) {
        this.vp.t3_c1_destino_arr = (await this.ap.exportaServico(
          'ExportaDepositos'
        )) as ExportaDepositos[];
        if (this.vp.t3_c1_destino_stx != '')
          this.vp.t3_c1_destino_sel = JSON.parse(this.vp.t3_c1_destino_stx);
      }
    }
  }

  public depositoSelect() {
    this.vp.t3_c1_destino_stx = JSON.stringify(this.vp.t3_c1_destino_sel);
    this.vp.t3_c1_destino_cod = '';
    this.vp.t3_c1_destino_des = '';
    for (const [i, d] of this.vp.t3_c1_destino_sel.entries()) {
      if (i == 0) {
        this.vp.t3_c1_destino_cod = `[${d.codDep}]`;
        this.vp.t3_c1_destino_des = `[${d.desDep}]`;
      } else {
        this.vp.t3_c1_destino_cod = `${this.vp.t3_c1_destino_cod} [${d.codDep}]`;
        this.vp.t3_c1_destino_des = `${this.vp.t3_c1_destino_des} [${d.desDep}]`;
      }
    }
  }

  public depositoClear() {
    this.vp.t3_c1_destino_sel = [];
    this.vp.t3_c1_destino_stx = '';
    this.vp.t3_c1_destino_cod = '';
    this.vp.t3_c1_destino_des = '';
  }
}

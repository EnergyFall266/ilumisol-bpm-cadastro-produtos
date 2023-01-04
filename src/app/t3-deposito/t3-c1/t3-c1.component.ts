import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { DepositosCadastro, ExportaDepositos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t3-c1',
  templateUrl: './t3-c1.component.html',
  styleUrls: ['./t3-c1.component.scss'],
})
export class T3C1Component implements OnInit {
  @Input() vp!: VP_BPM;
  @Input() dep!: DepositosCadastro;

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
        if (this.vp.t3_c1_destino_cod != '')
          this.dep.t3_c1_destino_obj = this.vp.t3_c1_destino_arr.find(
            (x) => x.codDep == this.dep.t3_c1_destino_cod
          );
      }
    }
  }

  public depositoSelect() {
    /*this.dep.t3_c1_destino_cod = this.dep.t3_c1_destino_obj!.codDep;
    this.dep.t3_c1_destino_des = this.dep.t3_c1_destino_obj!.desDep;
    this.mostrar_modal = false;*/
    this.dep.t3_c1_destino_cod = '';
    this.dep.t3_c1_destino_des = '';
    for (const [i, d] of this.dep.t3_c1_destino_sel.entries()) {
      if (i == 0) {
        this.dep.t3_c1_destino_cod = `[${d.codDep}]`;
        this.dep.t3_c1_destino_des = `[${d.desDep}]`;
      } else {
        this.dep.t3_c1_destino_cod = `${this.dep.t3_c1_destino_cod} [${d.codDep}]`;
        this.dep.t3_c1_destino_des = `${this.dep.t3_c1_destino_des} [${d.desDep}]`;
      }
    }
  }
}

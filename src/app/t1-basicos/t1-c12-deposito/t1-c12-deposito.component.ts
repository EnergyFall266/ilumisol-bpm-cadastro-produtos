import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaDepositos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c12-deposito',
  templateUrl: './t1-c12-deposito.component.html',
  styleUrls: ['./t1-c12-deposito.component.scss'],
})
export class T1C12DepositoComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async depositoInput() {
    this.mostrar_modal = true;
    if (this.vp.t1_c12_destino_arr.length == 0) {
      this.vp.t1_c12_destino_arr = (await this.ap.exportaServico(
        'ExportaDepositos',
        JSON.stringify({ codEmp: this.vp.c1_empresa_cod })
      )) as ExportaDepositos[];
      if (this.vp.t1_c12_destino_stx != '')
        this.vp.t1_c12_destino_sel = JSON.parse(this.vp.t1_c12_destino_stx);
    }
  }

  public depositoSelect() {
    this.vp.t1_c12_destino_stx = JSON.stringify(this.vp.t1_c12_destino_sel);
    this.vp.t1_c12_destino_cod = '';
    //this.vp.t1_c12_destino_des = '';
    for (const [i, d] of this.vp.t1_c12_destino_sel.entries())
      i == 0
        ? (this.vp.t1_c12_destino_cod = d.codDep + '')
        : (this.vp.t1_c12_destino_cod += `; ${d.codDep}`);
    //this.vp.t1_c12_destino_des = `[${d.desDep}]`;
    //this.vp.t1_c12_destino_des = `${this.vp.t1_c12_destino_des} [${d.desDep}]`;
  }

  public depositoClear() {
    this.vp.t1_c12_destino_sel = [];
    this.vp.t1_c12_destino_stx = '';
    this.vp.t1_c12_destino_cod = '';
    //this.vp.t1_c12_destino_des = '';
  }
}

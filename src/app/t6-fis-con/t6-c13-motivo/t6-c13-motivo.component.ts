import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c13-motivo',
  templateUrl: './t6-c13-motivo.component.html',
  styleUrls: ['./t6-c13-motivo.component.scss'],
})
export class T6C13MotivoComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async motivoInput() {
    this.mostrar_modal = true;
    if (this.vp.t6_c13_motivo_arr.length == 0) {
      this.vp.t6_c13_motivo_arr = (await this.ap.exportaServico(
        'ExportaValorLista',
        'LMotDes'
      )) as ExportaValorLista[];
      if (this.vp.t6_c13_motivo_cod != -1)
        this.vp.t6_c13_motivo_obj = this.vp.t6_c13_motivo_arr.find(
          (x) => Number(x.chvLis) == this.vp.t6_c13_motivo_cod
        );
    }
  }

  public motivoSelect() {
    this.vp.t6_c13_motivo_cod = Number(this.vp.t6_c13_motivo_obj!.chvLis);
    this.vp.t6_c13_motivo_des = this.vp.t6_c13_motivo_obj!.desLis;
    this.mostrar_modal = false;
  }

  public motivoClear() {
    this.vp.t6_c13_motivo_obj = undefined;
    this.vp.t6_c13_motivo_cod = -1;
    this.vp.t6_c13_motivo_des = '';
  }
}

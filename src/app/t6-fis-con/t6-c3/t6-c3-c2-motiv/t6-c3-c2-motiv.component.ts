import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c3-c2-motiv',
  templateUrl: './t6-c3-c2-motiv.component.html',
  styleUrls: ['./t6-c3-c2-motiv.component.scss'],
})
export class T6C3C2MotivComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;
  public buscando: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async motivoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t6_c3_c2_motivo_arr.length == 0) {
        this.buscando = true;
        this.vp.t6_c3_c2_motivo_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LMotDes'
        )) as ExportaValorLista[];
        this.buscando = false;
      }
    }
  }

  public motivoSelect() {
    this.vp.t6_c3_c2_motivo_cod = this.vp.t6_c3_c2_motivo_obj!.chvLis;
    this.vp.t6_c3_c2_motivo_des = this.vp.t6_c3_c2_motivo_obj!.desLis;
    this.mostrar_modal = false;
  }
}

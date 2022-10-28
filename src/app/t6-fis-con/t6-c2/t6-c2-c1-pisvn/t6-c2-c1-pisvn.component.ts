import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c2-c1-pisvn',
  templateUrl: './t6-c2-c1-pisvn.component.html',
  styleUrls: ['./t6-c2-c1-pisvn.component.scss'],
})
export class T6C2C1PisvnComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;
  public buscando: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async situacaoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t6_c2_sit_tri_arr.length == 0) {
        this.buscando = true;
        this.vp.t6_c2_sit_tri_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LCstImp'
        )) as ExportaValorLista[];
        this.buscando = false;
      }
    }
  }

  public situacaoSelect() {
    this.vp.t6_c2_c1_pis_ven_cod = this.vp.t6_c2_c1_pis_ven_obj!.chvLis;
    this.vp.t6_c2_c1_pis_ven_des = this.vp.t6_c2_c1_pis_ven_obj!.desLis;
    this.mostrar_modal = false;
  }
}

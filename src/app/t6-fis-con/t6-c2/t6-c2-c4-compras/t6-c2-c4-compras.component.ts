import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c2-c4-compras',
  templateUrl: './t6-c2-c4-compras.component.html',
  styleUrls: ['./t6-c2-c4-compras.component.scss'],
})
export class T6C2C4ComprasComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modalPis: boolean = false;
  public mostrar_modalCof: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async pisInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modalPis = true;
      if (this.vp.t6_c2_c4_pis_com_arr.length == 0) {
        this.vp.t6_c2_c4_pis_com_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LCstImp'
        )) as ExportaValorLista[];
      }
    }
  }

  public pisSelect() {
    this.vp.t6_c2_c4_pis_com_cod = this.vp.t6_c2_c4_pis_com_obj!.chvLis;
    this.mostrar_modalPis = false;
  }

  public async cofInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modalCof = true;
      if (this.vp.t6_c2_c4_cof_com_arr.length == 0) {
        this.vp.t6_c2_c4_cof_com_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LCstImp'
        )) as ExportaValorLista[];
      }
    }
  }

  public cofSelect() {
    this.vp.t6_c2_c4_cof_com_cod = this.vp.t6_c2_c4_cof_com_obj!.chvLis;
    this.mostrar_modalCof = false;
  }
}

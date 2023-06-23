import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c10-situ-pis-compras',
  templateUrl: './t6-c10-situ-pis-compras.component.html',
  styleUrls: ['./t6-c10-situ-pis-compras.component.scss'],
})
export class T6C10SituPisComprasComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_pis: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async pisInput() {
    this.mostrar_modal_pis = true;
    if (this.vp.t6_situacao_arr.length == 0) {
      this.vp.t6_situacao_arr = (await this.ap.exportaServico(
        'ExportaValorLista',
        'LCstImp'
      )) as ExportaValorLista[];
      if (this.vp.t6_c10_s_p_com_cod != '')
        this.vp.t6_c10_s_p_com_obj = this.vp.t6_situacao_arr.find(
          (x) => x.chvLis == this.vp.t6_c10_s_p_com_cod
        );
    }
  }

  public pisSelect() {
    this.vp.t6_c10_s_p_com_cod = this.vp.t6_c10_s_p_com_obj!.chvLis;
    this.vp.t6_c10_s_p_com_des = this.vp.t6_c10_s_p_com_obj!.desLis;
    this.mostrar_modal_pis = false;
  }

  public pisClear() {
    this.vp.t6_c10_s_p_com_obj = undefined;
    this.vp.t6_c10_s_p_com_cod = '';
    this.vp.t6_c10_s_p_com_des = '';
  }
}

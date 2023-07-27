import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c7-situ-pis-vendas',
  templateUrl: './t6-c7-situ-pis-vendas.component.html',
  styleUrls: ['./t6-c7-situ-pis-vendas.component.scss'],
})
export class T6C7SituPisVendasComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async situacaoInput() {
    this.mostrar_modal = true;
    if (this.vp.t6_situacao_arr.length == 0)
      this.vp.t6_situacao_arr = (await this.ap.exportaServico(
        'ExportaValorLista',
        'LCstImp'
      )) as ExportaValorLista[];
    if (
      this.vp.t6_c7_s_p_ven_obj === undefined &&
      this.vp.t6_c7_s_p_ven_cod != ''
    )
      this.vp.t6_c7_s_p_ven_obj = this.vp.t6_situacao_arr.find(
        (x) => x.chvLis == this.vp.t6_c7_s_p_ven_cod
      );
  }

  public situacaoSelect() {
    this.vp.t6_c7_s_p_ven_cod = this.vp.t6_c7_s_p_ven_obj!.chvLis;
    this.vp.t6_c7_s_p_ven_des = this.vp.t6_c7_s_p_ven_obj!.desLis;
    this.mostrar_modal = false;
  }

  public situacaoClear() {
    this.vp.t6_c7_s_p_ven_obj = undefined;
    this.vp.t6_c7_s_p_ven_cod = '';
    this.vp.t6_c7_s_p_ven_des = '';
  }
}

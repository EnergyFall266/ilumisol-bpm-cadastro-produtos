import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c16-situ-trib',
  templateUrl: './t6-c16-situ-trib.component.html',
  styleUrls: ['./t6-c16-situ-trib.component.scss']
})
export class T6C16SituTribComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_pis: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async pisInput() {
    this.mostrar_modal_pis = true;
    if (this.vp.t6_situacao_arr.length == 0)
      this.vp.t6_situacao_arr = (
        (await this.ap.exportaServico(
          'ExportaValorLista',
          'LCstImp'
        )) as ExportaValorLista[]
      ).map<ExportaValorLista>((l) => ({
        chvLis: l.chvLis + '',
        desLis: l.desLis,
      }));
    if (
      this.vp.t6_c16_situ_trib_obj === undefined &&
      this.vp.t6_c16_situ_trib_cod != ''
    )
      this.vp.t6_c16_situ_trib_obj = this.vp.t6_situacao_arr.find(
        (x) => x.chvLis == this.vp.t6_c16_situ_trib_cod
      );
  }

  public pisSelect() {
    this.vp.t6_c16_situ_trib_cod = this.vp.t6_c16_situ_trib_obj?.chvLis + '';
    this.vp.t6_c16_situ_trib_des = this.vp.t6_c16_situ_trib_obj?.desLis ?? '';
    this.mostrar_modal_pis = false;
  }

  public pisClear() {
    this.vp.t6_c16_situ_trib_obj = undefined;
    this.vp.t6_c16_situ_trib_cod = '';
    this.vp.t6_c16_situ_trib_des = '';
  }
}

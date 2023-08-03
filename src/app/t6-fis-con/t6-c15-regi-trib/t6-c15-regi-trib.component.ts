import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c15-regi-trib',
  templateUrl: './t6-c15-regi-trib.component.html',
  styleUrls: ['./t6-c15-regi-trib.component.scss'],
})
export class T6C15RegiTribComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async enquaInput() {
    this.mostrar_modal = true;
    if (this.vp.t6_c15_regi_trib_arr.length == 0) {
      this.vp.t6_c15_regi_trib_arr = (
        (await this.ap.exportaServico(
          'ExportaValorLista',
          'LRegTri'
        )) as ExportaValorLista[]
      ).map<ExportaValorLista>((l) => ({
        chvLis: l.chvLis + '',
        desLis: l.desLis,
      }));
      if (this.vp.t6_c15_regi_trib_cod != '')
        this.vp.t6_c15_regi_trib_obj = this.vp.t6_c15_regi_trib_arr.find(
          (x) => x.chvLis == this.vp.t6_c15_regi_trib_cod
        );
    }
  }

  public enquaSelect() {
    this.vp.t6_c15_regi_trib_cod = this.vp.t6_c15_regi_trib_obj?.chvLis + '';
    this.vp.t6_c15_regi_trib_des = this.vp.t6_c15_regi_trib_obj?.desLis ?? '';
    this.mostrar_modal = false;
  }

  public enquaClear() {
    this.vp.t6_c15_regi_trib_obj = undefined;
    this.vp.t6_c15_regi_trib_cod = '';
    this.vp.t6_c15_regi_trib_des = '';
  }
}

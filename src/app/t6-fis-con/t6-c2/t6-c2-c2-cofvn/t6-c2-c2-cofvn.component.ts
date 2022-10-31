import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c2-c2-cofvn',
  templateUrl: './t6-c2-c2-cofvn.component.html',
  styleUrls: ['./t6-c2-c2-cofvn.component.scss'],
})
export class T6C2C2CofvnComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async situacaoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t6_c2_sit_tri_arr.length == 0)
        this.vp.t6_c2_sit_tri_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LCstImp'
        )) as ExportaValorLista[];
    }
  }

  public situacaoSelect() {
    this.vp.t6_c2_c2_cof_ven_cod = this.vp.t6_c2_c2_cof_ven_obj!.chvLis;
    this.vp.t6_c2_c2_cof_ven_des = this.vp.t6_c2_c2_cof_ven_obj!.desLis;
    this.mostrar_modal = false;
  }
}

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

  public mostrar_modalSit: boolean = false;
  public mostrar_modalNat: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async situacaoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modalSit = true;
      if (this.vp.t6_c2_c2_cof_ven_arr.length == 0) {
        this.vp.t6_c2_c2_cof_ven_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LCstImp'
        )) as ExportaValorLista[];
      }
    }
  }

  public situacaoSelect() {
    this.vp.t6_c2_c2_cof_ven_cod = this.vp.t6_c2_c2_cof_ven_obj!.chvLis;
    this.mostrar_modalSit = false;
  }

  public naturezaInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modalNat = true;
      if (this.vp.t6_c2_c2_cof_nat_arr.length == 0) {
      }
    }
  }

  public naturezaSelect() {
    this.mostrar_modalNat = false;
  }
}

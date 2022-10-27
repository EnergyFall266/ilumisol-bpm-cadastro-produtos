import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista, NaturezaReceita } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c2-c1-pisvn',
  templateUrl: './t6-c2-c1-pisvn.component.html',
  styleUrls: ['./t6-c2-c1-pisvn.component.scss'],
})
export class T6C2C1PisvnComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modalSit: boolean = false;
  public mostrar_modalNat: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async situacaoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modalSit = true;
      if (this.vp.t6_c2_c1_pis_ven_arr.length == 0) {
        this.vp.t6_c2_c1_pis_ven_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LCstImp'
        )) as ExportaValorLista[];
      }
    }
  }

  public situacaoSelect() {
    this.vp.t6_c2_c1_pis_ven_cod = this.vp.t6_c2_c1_pis_ven_obj!.chvLis;
    this.mostrar_modalSit = false;
  }

  public async naturezaInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modalNat = true;
      if (this.vp.t6_c2_c1_pis_nat_arr.length == 0) {
      }
    }
  }

  public naturezaSelect() {
    this.mostrar_modalNat = false;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaSubstituicao } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c6-substituicao-pis',
  templateUrl: './t6-c6-substituicao-pis.component.html',
  styleUrls: ['./t6-c6-substituicao-pis.component.scss'],
})
export class T6C6SubstituicaoPisComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_pis: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async pisInput() {
    this.mostrar_modal_pis = true;
    if (this.vp.t6_substituicao_arr.length == 0) {
      this.vp.t6_substituicao_arr = (await this.ap.exportaServico(
        'ExportaSubstituicao'
      )) as ExportaSubstituicao[];
      if (this.vp.t6_c6_pis_subs_cod != '')
        this.vp.t6_c6_pis_subs_obj = this.vp.t6_substituicao_arr.find(
          (x) => x.codTst == this.vp.t6_c6_pis_subs_cod
        );
    }
  }

  public pisSelect() {
    this.vp.t6_c6_pis_subs_cod = this.vp.t6_c6_pis_subs_obj!.codTst;
    this.mostrar_modal_pis = false;
  }

  public pisClear() {
    this.vp.t6_c6_pis_subs_obj = undefined;
    this.vp.t6_c6_pis_subs_cod = '';
  }
}

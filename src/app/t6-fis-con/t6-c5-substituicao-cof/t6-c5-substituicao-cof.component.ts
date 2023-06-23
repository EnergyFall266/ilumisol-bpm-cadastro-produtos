import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaSubstituicao } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c5-substituicao-cof',
  templateUrl: './t6-c5-substituicao-cof.component.html',
  styleUrls: ['./t6-c5-substituicao-cof.component.scss'],
})
export class T6C5SubstituicaoCofComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_cof: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async cofinsInput() {
    this.mostrar_modal_cof = true;
    if (this.vp.t6_substituicao_arr.length == 0) {
      this.vp.t6_substituicao_arr = (await this.ap.exportaServico(
        'ExportaSubstituicao'
      )) as ExportaSubstituicao[];
      if (this.vp.t6_c5_cof_subs_cod != '')
        this.vp.t6_c5_cof_subs_obj = this.vp.t6_substituicao_arr.find(
          (x) => x.codTst == this.vp.t6_c5_cof_subs_cod
        );
    }
  }

  public cofinsSelect() {
    this.vp.t6_c5_cof_subs_cod = this.vp.t6_c5_cof_subs_obj!.codTst;
    this.mostrar_modal_cof = false;
  }

  public cofinsClear() {
    this.vp.t6_c5_cof_subs_obj = undefined;
    this.vp.t6_c5_cof_subs_cod = '';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaSubstituicao } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c4-icms-substituido',
  templateUrl: './t6-c4-icms-substituido.component.html',
  styleUrls: ['./t6-c4-icms-substituido.component.scss'],
})
export class T6C4IcmsSubstituidoComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_icm: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async icmsInput() {
    this.mostrar_modal_icm = true;
    if (this.vp.t6_substituicao_arr.length == 0) {
      this.vp.t6_substituicao_arr = (await this.ap.exportaServico(
        'ExportaSubstituicao'
      )) as ExportaSubstituicao[];
      if (this.vp.t6_c4_icms_subs_cod != '')
        this.vp.t6_c4_icms_subs_obj = this.vp.t6_substituicao_arr.find(
          (x) => x.codTst == this.vp.t6_c4_icms_subs_cod
        );
    }
  }

  public icmsSelect() {
    this.vp.t6_c4_icms_subs_cod = this.vp.t6_c4_icms_subs_obj!.codTst;
    this.mostrar_modal_icm = false;
  }

  public icmsClear() {
    this.vp.t6_c4_icms_subs_obj = undefined;
    this.vp.t6_c4_icms_subs_cod = '';
  }
}

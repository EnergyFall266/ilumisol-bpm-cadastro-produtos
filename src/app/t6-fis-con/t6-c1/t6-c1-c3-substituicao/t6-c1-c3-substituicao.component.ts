import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaSubstituicao } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c1-c3-substituicao',
  templateUrl: './t6-c1-c3-substituicao.component.html',
  styleUrls: ['./t6-c1-c3-substituicao.component.scss'],
})
export class T6C1C3SubstituicaoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal_icm: boolean = false;
  public mostrar_modal_cof: boolean = false;
  public mostrar_modal_pis: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async icmsInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal_icm = true;
      if (this.vp.t6_c1_substituicao_arr.length == 0) this.buscarSubstituicao();
    }
  }

  public icmsSelect() {
    this.vp.t6_c1_c3_icm_subs_cod = this.vp.t6_c1_c3_icm_subs_obj!.codTst;
    this.mostrar_modal_icm = false;
  }

  public icmsClear() {
    this.vp.t6_c1_c3_icm_subs_obj = undefined;
    this.vp.t6_c1_c3_icm_subs_cod = '';
  }

  public async cofinsInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal_cof = true;
      if (this.vp.t6_c1_substituicao_arr.length == 0) this.buscarSubstituicao();
    }
  }

  public cofinsSelect() {
    this.vp.t6_c1_c3_cof_subs_cod = this.vp.t6_c1_c3_cof_subs_obj!.codTst;
    this.mostrar_modal_cof = false;
  }

  public cofinsClear() {
    this.vp.t6_c1_c3_cof_subs_obj = undefined;
    this.vp.t6_c1_c3_cof_subs_cod = '';
  }

  public async pisInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal_pis = true;
      if (this.vp.t6_c1_substituicao_arr.length == 0) this.buscarSubstituicao();
    }
  }

  public pisSelect() {
    this.vp.t6_c1_c3_pis_subs_cod = this.vp.t6_c1_c3_pis_subs_obj!.codTst;
    this.mostrar_modal_pis = false;
  }

  public pisClear() {
    this.vp.t6_c1_c3_pis_subs_obj = undefined;
    this.vp.t6_c1_c3_pis_subs_cod = '';
  }

  private async buscarSubstituicao() {
    this.vp.t6_c1_substituicao_arr = (await this.ap.exportaServico(
      'ExportaSubstituicao'
    )) as ExportaSubstituicao[];
    if (this.vp.t6_c1_c3_icm_subs_cod != '')
      this.vp.t6_c1_c3_icm_subs_obj = this.vp.t6_c1_substituicao_arr.find(
        (x) => x.codTst == this.vp.t6_c1_c3_icm_subs_cod
      );
    if (this.vp.t6_c1_c3_cof_subs_cod != '')
      this.vp.t6_c1_c3_cof_subs_obj = this.vp.t6_c1_substituicao_arr.find(
        (x) => x.codTst == this.vp.t6_c1_c3_cof_subs_cod
      );
    if (this.vp.t6_c1_c3_pis_subs_cod != '')
      this.vp.t6_c1_c3_pis_subs_obj = this.vp.t6_c1_substituicao_arr.find(
        (x) => x.codTst == this.vp.t6_c1_c3_pis_subs_cod
      );
  }
}

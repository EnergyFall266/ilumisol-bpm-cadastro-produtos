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

  public showModalCof: boolean = false;
  public showModalPis: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async cofinsInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalCof = true;
      if (this.vp.t6_c1_c3_cof_subs_arr.length == 0) {
        this.vp.t6_c1_c3_cof_subs_arr = (await this.ap.exportaServico(
          'ExportaSubstituicao'
        )) as ExportaSubstituicao[];
      }
    }
  }

  public cofinsSelect() {
    this.vp.t6_c1_c3_cof_subs_cod = this.vp.t6_c1_c3_cof_subs_obj!.codTst;
    this.showModalCof = false;
  }

  public async pisInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalPis = true;
      if (this.vp.t6_c1_c3_pis_subs_arr.length == 0) {
        this.vp.t6_c1_c3_pis_subs_arr = (await this.ap.exportaServico(
          'ExportaSubstituicao'
        )) as ExportaSubstituicao[];
      }
    }
  }

  public pisSelect() {
    this.vp.t6_c1_c3_pis_subs_cod = this.vp.t6_c1_c3_pis_subs_obj!.codTst;
    this.showModalPis = false;
  }
}

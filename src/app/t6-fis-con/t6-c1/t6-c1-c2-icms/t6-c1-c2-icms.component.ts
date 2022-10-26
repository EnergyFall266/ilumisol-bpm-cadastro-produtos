import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import {
  ExportaICMSEsp,
  ExportaReducaoICMS,
  ExportaSubstituicao,
} from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c1-c2-icms',
  templateUrl: './t6-c1-c2-icms.component.html',
  styleUrls: ['./t6-c1-c2-icms.component.scss'],
})
export class T6C1C2IcmsComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalEsp: boolean = false;
  public showModalRed: boolean = false;
  public showModalSub: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async especialInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalEsp = true;
      if (this.vp.t6_c1_c2_icms_especial_arr.length == 0) {
        this.vp.t6_c1_c2_icms_especial_arr = (await this.ap.exportaServico(
          'ExportaICMSEsp'
        )) as ExportaICMSEsp[];
      }
    }
  }

  public especialSelect() {
    this.vp.t6_c1_c2_icms_especial_cod =
      this.vp.t6_c1_c2_icms_especial_obj!.codTic;
    this.showModalEsp = false;
  }

  public async reducaoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalRed = true;
      if (this.vp.t6_c1_c2_reducao_icms_arr.length == 0) {
        this.vp.t6_c1_c2_reducao_icms_arr = (await this.ap.exportaServico(
          'ExportaReducaoICMS'
        )) as ExportaReducaoICMS[];
      }
    }
  }

  public reducaoSelect() {
    this.vp.t6_c1_c2_reducao_icms_cod =
      this.vp.t6_c1_c2_reducao_icms_obj!.codTrd;
    this.showModalRed = false;
  }

  public async substituidoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalSub = true;
      if (this.vp.t6_c1_c2_icms_substituido_arr.length == 0) {
        this.vp.t6_c1_c2_icms_substituido_arr = (await this.ap.exportaServico(
          'ExportaSubstituicao'
        )) as ExportaSubstituicao[];
      }
    }
  }

  public substituidoSelect() {
    this.vp.t6_c1_c2_icms_substituido_cod =
      this.vp.t6_c1_c2_icms_substituido_obj!.codTst;
    this.showModalSub = false;
  }
}

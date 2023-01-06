import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaICMSEsp, ExportaReducaoICMS } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c1-c2-icms',
  templateUrl: './t6-c1-c2-icms.component.html',
  styleUrls: ['./t6-c1-c2-icms.component.scss'],
})
export class T6C1C2IcmsComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal_esp: boolean = false;
  public mostrar_modal_red: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async especialInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal_esp = true;
      if (this.vp.t6_c1_c2_icms_especial_arr.length == 0) {
        this.vp.t6_c1_c2_icms_especial_arr = (await this.ap.exportaServico(
          'ExportaICMSEsp'
        )) as ExportaICMSEsp[];
        if (this.vp.t6_c1_c2_icms_especial_cod != '')
          this.vp.t6_c1_c2_icms_especial_obj =
            this.vp.t6_c1_c2_icms_especial_arr.find(
              (x) => x.codTic == this.vp.t6_c1_c2_icms_especial_cod
            );
      }
    }
  }

  public especialSelect() {
    this.vp.t6_c1_c2_icms_especial_cod =
      this.vp.t6_c1_c2_icms_especial_obj!.codTic;
    this.mostrar_modal_esp = false;
  }

  public especialClear() {
    this.vp.t6_c1_c2_icms_especial_obj = undefined;
    this.vp.t6_c1_c2_icms_especial_cod = '';
  }

  public async reducaoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal_red = true;
      if (this.vp.t6_c1_c2_reducao_icms_arr.length == 0) {
        this.vp.t6_c1_c2_reducao_icms_arr = (await this.ap.exportaServico(
          'ExportaReducaoICMS'
        )) as ExportaReducaoICMS[];
        if (this.vp.t6_c1_c2_reducao_icms_cod != '')
          this.vp.t6_c1_c2_reducao_icms_obj =
            this.vp.t6_c1_c2_reducao_icms_arr.find(
              (x) => x.codTrd == this.vp.t6_c1_c2_reducao_icms_cod
            );
      }
    }
  }

  public reducaoSelect() {
    this.vp.t6_c1_c2_reducao_icms_cod =
      this.vp.t6_c1_c2_reducao_icms_obj!.codTrd;
    this.mostrar_modal_red = false;
  }

  public reducaoClear() {
    this.vp.t6_c1_c2_reducao_icms_obj = undefined;
    this.vp.t6_c1_c2_reducao_icms_cod = '';
  }
}

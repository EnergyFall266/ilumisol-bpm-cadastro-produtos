import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaReducaoICMS } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c3-reducao-icms',
  templateUrl: './t6-c3-reducao-icms.component.html',
  styleUrls: ['./t6-c3-reducao-icms.component.scss'],
})
export class T6C3ReducaoIcmsComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_red: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async reducaoInput() {
    this.mostrar_modal_red = true;
    if (this.vp.t6_c3_redu_icms_arr.length == 0) {
      this.vp.t6_c3_redu_icms_arr = (await this.ap.exportaServico(
        'ExportaReducaoICMS'
      )) as ExportaReducaoICMS[];
      if (this.vp.t6_c3_redu_icms_cod != '')
        this.vp.t6_c3_redu_icms_obj = this.vp.t6_c3_redu_icms_arr.find(
          (x) => x.codTrd == this.vp.t6_c3_redu_icms_cod
        );
    }
  }

  public reducaoSelect() {
    this.vp.t6_c3_redu_icms_cod = this.vp.t6_c3_redu_icms_obj!.codTrd;
    this.mostrar_modal_red = false;
  }

  public reducaoClear() {
    this.vp.t6_c3_redu_icms_obj = undefined;
    this.vp.t6_c3_redu_icms_cod = '';
  }
}

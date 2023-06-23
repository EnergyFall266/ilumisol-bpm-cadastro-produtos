import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaICMSEsp } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c2-icms-especial',
  templateUrl: './t6-c2-icms-especial.component.html',
  styleUrls: ['./t6-c2-icms-especial.component.scss'],
})
export class T6C2IcmsEspecialComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_esp: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async especialInput() {
    this.mostrar_modal_esp = true;
    if (this.vp.t6_c2_icms_espe_arr.length == 0) {
      this.vp.t6_c2_icms_espe_arr = (await this.ap.exportaServico(
        'ExportaICMSEsp'
      )) as ExportaICMSEsp[];
      if (this.vp.t6_c2_icms_espe_cod != '')
        this.vp.t6_c2_icms_espe_obj = this.vp.t6_c2_icms_espe_arr.find(
          (x) => x.codTic == this.vp.t6_c2_icms_espe_cod
        );
    }
  }

  public especialSelect() {
    this.vp.t6_c2_icms_espe_cod = this.vp.t6_c2_icms_espe_obj!.codTic;
    this.mostrar_modal_esp = false;
  }

  public especialClear() {
    this.vp.t6_c2_icms_espe_obj = undefined;
    this.vp.t6_c2_icms_espe_cod = '';
  }
}

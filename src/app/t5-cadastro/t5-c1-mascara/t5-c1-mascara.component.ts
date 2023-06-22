import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaMascaraDerivacao } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t5-c1-mascara',
  templateUrl: './t5-c1-mascara.component.html',
  styleUrls: ['./t5-c1-mascara.component.scss']
})
export class T5C1MascaraComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async mascaraInput() {
    if (!this.vp.t5_req_to_read) {
      this.mostrar_modal = true;
      if (this.vp.t5_c1_mascara_arr.length == 0) {
        this.vp.t5_c1_mascara_arr = (await this.ap.exportaServico(
          'ExportaMascaraDerivacao'
        )) as ExportaMascaraDerivacao[];
        if (this.vp.t5_c1_mascara_cod != '')
          this.vp.t5_c1_mascara_obj = this.vp.t5_c1_mascara_arr.find(
            (x) => x.codMdp == this.vp.t5_c1_mascara_cod
          );
      }
    }
  }

  public mascaraSelect() {
    this.vp.t5_c1_mascara_cod = this.vp.t5_c1_mascara_obj!.codMdp;
    this.vp.t5_c1_mascara_des = this.vp.t5_c1_mascara_obj!.desMdp;
    this.mostrar_modal = false;
  }

  public mascaraClear() {
    this.vp.t5_c1_mascara_obj = undefined;
    this.vp.t5_c1_mascara_cod = '';
    this.vp.t5_c1_mascara_des = '';
  }
}

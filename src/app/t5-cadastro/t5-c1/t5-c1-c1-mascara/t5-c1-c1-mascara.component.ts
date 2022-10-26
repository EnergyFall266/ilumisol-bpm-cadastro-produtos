import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaMascaraDerivacao } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t5-c1-c1-mascara',
  templateUrl: './t5-c1-c1-mascara.component.html',
  styleUrls: ['./t5-c1-c1-mascara.component.scss'],
})
export class T5C1C1MascaraComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMas: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async mascaraInput() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalMas = true;
      if (this.vp.t5_c1_c1_mascara_arr.length == 0) {
        this.vp.t5_c1_c1_mascara_arr = (await this.ap.exportaServico(
          'ExportaMascaraDerivacao'
        )) as ExportaMascaraDerivacao[];
      }
    }
  }

  public mascaraSelect() {
    this.vp.t5_c1_c1_mascara_cod = this.vp.t5_c1_c1_mascara_obj!.codMdp;
    this.showModalMas = false;
  }
}

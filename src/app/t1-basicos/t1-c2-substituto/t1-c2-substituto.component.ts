import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaProdutos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c2-substituto',
  templateUrl: './t1-c2-substituto.component.html',
  styleUrls: ['./t1-c2-substituto.component.scss']
})
export class T1C2SubstitutoComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async substituidoInput() {
    this.mostrar_modal = true;
    if (this.vp.t1_c2_substituto_arr.length == 0) {
      this.vp.t1_c2_substituto_arr = (
        (await this.ap.exportaServico('ExportaProdutos')) as ExportaProdutos[]
      ).map<ExportaProdutos>((l) => ({
        codPro: l.codPro.replaceAll("'", ''),
        desPro: l.desPro,
      }));
      if (this.vp.t1_c2_substituto_cod != '')
        this.vp.t1_c2_substituto_obj = this.vp.t1_c2_substituto_arr.find(
          (x) => x.codPro == this.vp.t1_c2_substituto_cod
        );
    }
  }

  public substituidoSelect() {
    this.vp.t1_c2_substituto_cod = this.vp.t1_c2_substituto_obj!.codPro;
    this.mostrar_modal = false;
  }

  public substituidoClear() {
    this.vp.t1_c2_substituto_obj = undefined;
    this.vp.t1_c2_substituto_cod = '';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaFamilias } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c1-c4-fam',
  templateUrl: './t1-c1-c4-fam.component.html',
  styleUrls: ['./t1-c1-c4-fam.component.scss'],
})
export class T1C1C4FamComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalFam: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async familiaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalFam = true;
      if (this.vp.t1_c1_c4_familia_arr.length == 0) await this.buscarFamilias();
      else
        for (const f of this.vp.t1_c1_c4_familia_arr)
          if (f.codOri != this.vp.t1_c1_c3_origem_cod) {
            this.vp.t1_c1_c4_familia_arr = [];
            this.vp.t1_c1_c4_familia_obj = undefined;
            this.vp.t1_c1_c4_familia_cod = '';
            this.vp.t1_c1_c4_familia_des = '';
            await this.buscarFamilias();
            break;
          }
    }
  }

  private buscarFamilias = async () =>
    (this.vp.t1_c1_c4_familia_arr = (await this.ap.exportaServico(
      'ExportaFamilias',
      this.vp.t1_c1_c3_origem_cod
    )) as ExportaFamilias[]);

  public familiaSelect() {
    this.vp.t1_c1_c4_familia_cod = this.vp.t1_c1_c4_familia_obj!.codFam;
    this.vp.t1_c1_c4_familia_des = this.vp.t1_c1_c4_familia_obj!.desFam;
    this.showModalFam = false;
  }
}

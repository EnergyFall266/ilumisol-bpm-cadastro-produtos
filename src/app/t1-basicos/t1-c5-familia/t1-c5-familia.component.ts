import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaFamilias } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c5-familia',
  templateUrl: './t1-c5-familia.component.html',
  styleUrls: ['./t1-c5-familia.component.scss'],
})
export class T1C5FamiliaComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async familiaInput() {
    this.mostrar_modal = true;
    if (this.vp.t1_c5_familia_arr.length == 0) await this.buscarFamilias();
    /*else
      for (const f of this.vp.t1_c5_familia_arr)
        if (f.codOri != this.vp.t1_c4_origem_cod) {
          this.vp.t1_c5_familia_arr = [];
          this.vp.t1_c5_familia_obj = undefined;
          this.vp.t1_c5_familia_cod = '';
          this.vp.t1_c5_familia_des = '';
          await this.buscarFamilias();
          break;
        }*/
  }

  private async buscarFamilias() {
    var json: any = { codEmp: this.vp.c1_empresa_cod };
    //if (this.vp.t1_c4_origem_cod != '') json.codOri = this.vp.t1_c4_origem_cod;
    this.vp.t1_c5_familia_arr = (
      (await this.ap.exportaServico(
        'ExportaFamilias',
        JSON.stringify(json)
      )) as ExportaFamilias[]
    ).map<ExportaFamilias>((l) => ({
      codFam: l.codFam + '',
      codOri: l.codOri + '',
      desFam: l.desFam,
    }));
    if (this.vp.t1_c5_familia_cod != '')
      this.vp.t1_c5_familia_obj = this.vp.t1_c5_familia_arr.find(
        (x) => x.codFam == this.vp.t1_c5_familia_cod
      );
  }

  public familiaSelect() {
    this.vp.t1_c5_familia_cod = this.vp.t1_c5_familia_obj!.codFam;
    this.vp.t1_c5_familia_des = this.vp.t1_c5_familia_obj!.desFam;
    this.vp.t1_c5_familia_ori = this.vp.t1_c5_familia_obj!.codOri + '';
    this.mostrar_modal = false;
  }

  public familiaClear() {
    this.vp.t1_c5_familia_obj = undefined;
    this.vp.t1_c5_familia_cod = '';
    this.vp.t1_c5_familia_des = '';
  }
}

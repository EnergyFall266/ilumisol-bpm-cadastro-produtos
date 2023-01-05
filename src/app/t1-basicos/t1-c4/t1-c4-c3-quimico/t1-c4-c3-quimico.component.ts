import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaGrupoQuimico } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c4-c3-quimico',
  templateUrl: './t1-c4-c3-quimico.component.html',
  styleUrls: ['./t1-c4-c3-quimico.component.scss'],
})
export class T1C4C3QuimicoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async quimicoInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t1_c4_c3_quimico_arr.length == 0) {
        this.vp.t1_c4_c3_quimico_arr = (await this.ap.exportaServico(
          'ExportaGrupoQuimico'
        )) as ExportaGrupoQuimico[];
        if (this.vp.t1_c4_c3_quimico_cod != -1)
          this.vp.t1_c4_c3_quimico_obj = this.vp.t1_c4_c3_quimico_arr.find(
            (x) => x.codQui == this.vp.t1_c4_c3_quimico_cod
          );
      }
    }
  }

  public quimicoSelect() {
    this.vp.t1_c4_c3_quimico_cod = this.vp.t1_c4_c3_quimico_obj!.codQui;
    this.vp.t1_c4_c3_quimico_des = this.vp.t1_c4_c3_quimico_obj!.desQui;
    this.mostrar_modal = false;
  }

  public quimicoClear() {
    this.vp.t1_c4_c3_quimico_obj = undefined;
    this.vp.t1_c4_c3_quimico_cod = -1;
    this.vp.t1_c4_c3_quimico_des = '';
  }
}

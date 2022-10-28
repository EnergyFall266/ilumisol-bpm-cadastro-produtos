import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaUniMeds } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t5-c2-c1-gerencial',
  templateUrl: './t5-c2-c1-gerencial.component.html',
  styleUrls: ['./t5-c2-c1-gerencial.component.scss'],
})
export class T5C2C1GerencialComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal_2: boolean = false;
  public mostrar_modal_3: boolean = false;
  public buscando: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async uni2Input() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.mostrar_modal_2 = true;
      if (this.vp.unidades_medida_arr.length == 0) this.buscarUnidades();
    }
  }

  public uni2Select() {
    this.vp.t5_c2_c1_med_2_cod = this.vp.t5_c2_c1_med_2_obj!.uniMed;
    this.vp.t5_c2_c1_med_2_des = this.vp.t5_c2_c1_med_2_obj!.desMed;
    this.mostrar_modal_2 = false;
  }

  public async uni3Input() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.mostrar_modal_3 = true;
      if (this.vp.unidades_medida_arr.length == 0) this.buscarUnidades();
    }
  }

  private async buscarUnidades() {
    this.buscando = true;
    this.vp.unidades_medida_arr = (await this.ap.exportaServico(
      'ExportaUniMeds'
    )) as ExportaUniMeds[];
    this.buscando = false;
  }

  public uni3Select() {
    this.vp.t5_c2_c1_med_3_cod = this.vp.t5_c2_c1_med_3_obj!.uniMed;
    this.vp.t5_c2_c1_med_3_des = this.vp.t5_c2_c1_med_3_obj!.desMed;
    this.mostrar_modal_3 = false;
  }
}

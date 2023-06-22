import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaUniMeds } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t5-c3-medida3',
  templateUrl: './t5-c3-medida3.component.html',
  styleUrls: ['./t5-c3-medida3.component.scss'],
})
export class T5C3Medida3Component {
  @Input() vp!: VP_BPM;

  public mostrar_modal_2: boolean = false;
  public mostrar_modal_3: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async uni3Input() {
    this.mostrar_modal_3 = true;
    if (this.vp.unidades_medida_arr.length == 0) {
      this.vp.unidades_medida_arr = (await this.ap.exportaServico(
        'ExportaUniMeds'
      )) as ExportaUniMeds[];
      if (this.vp.t5_c3_medida3_cod != '')
        this.vp.t5_c3_medida3_obj = this.vp.unidades_medida_arr.find(
          (x) => x.uniMed == this.vp.t5_c3_medida3_cod
        );
    }
  }

  public uni3Select() {
    this.vp.t5_c3_medida3_cod = this.vp.t5_c3_medida3_obj!.uniMed;
    this.vp.t5_c3_medida3_des = this.vp.t5_c3_medida3_obj!.desMed;
    this.mostrar_modal_3 = false;
  }

  public uni3Clear() {
    this.vp.t5_c3_medida3_obj = undefined;
    this.vp.t5_c3_medida3_cod = '';
    this.vp.t5_c3_medida3_des = '';
  }
}

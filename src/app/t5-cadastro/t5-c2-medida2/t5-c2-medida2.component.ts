import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaUniMeds } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t5-c2-medida2',
  templateUrl: './t5-c2-medida2.component.html',
  styleUrls: ['./t5-c2-medida2.component.scss'],
})
export class T5C2Medida2Component {
  @Input() vp!: VP_BPM;

  public mostrar_modal_2: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async uni2Input() {
    this.mostrar_modal_2 = true;
    if (this.vp.unidades_medida_arr.length == 0) {
      this.vp.unidades_medida_arr = (await this.ap.exportaServico(
        'ExportaUniMeds'
      )) as ExportaUniMeds[];
      if (this.vp.t5_c2_medida2_cod != '')
        this.vp.t5_c2_medida2_obj = this.vp.unidades_medida_arr.find(
          (x) => x.uniMed == this.vp.t5_c2_medida2_cod
        );
    }
  }

  public uni2Select() {
    this.vp.t5_c2_medida2_cod = this.vp.t5_c2_medida2_obj!.uniMed;
    this.vp.t5_c2_medida2_des = this.vp.t5_c2_medida2_obj!.desMed;
    this.mostrar_modal_2 = false;
  }

  public uni2Clear() {
    this.vp.t5_c2_medida2_obj = undefined;
    this.vp.t5_c2_medida2_cod = '';
    this.vp.t5_c2_medida2_des = '';
  }
}

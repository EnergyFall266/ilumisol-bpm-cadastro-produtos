import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaUniMeds } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t2-c2-unidade',
  templateUrl: './t2-c2-unidade.component.html',
  styleUrls: ['./t2-c2-unidade.component.scss'],
})
export class T2C2UnidadeComponent {
  /*@Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async unidadeInput() {
    this.mostrar_modal = true;
    if (this.vp.unidades_medida_arr.length == 0) {
      this.vp.unidades_medida_arr = (await this.ap.exportaServico(
        'ExportaUniMeds'
      )) as ExportaUniMeds[];
      if (this.vp.t2_c2_medida_cod != '')
        this.vp.t2_c2_medida_obj = this.vp.unidades_medida_arr.find(
          (x) => x.uniMed == this.vp.t2_c2_medida_cod
        );
    }
  }

  public unidadeSelect() {
    this.vp.t2_c2_medida_cod = this.vp.t2_c2_medida_obj!.uniMed;
    this.vp.t2_c2_medida_des = this.vp.t2_c2_medida_obj!.desMed;
    this.mostrar_modal = false;
  }

  public unidadeClear() {
    this.vp.t2_c2_medida_obj = undefined;
    this.vp.t2_c2_medida_cod = '';
    this.vp.t2_c2_medida_des = '';
  }*/
}

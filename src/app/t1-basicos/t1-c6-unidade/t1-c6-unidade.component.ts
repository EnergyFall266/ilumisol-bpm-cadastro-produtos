import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaUniMeds } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c6-unidade',
  templateUrl: './t1-c6-unidade.component.html',
  styleUrls: ['./t1-c6-unidade.component.scss'],
})
export class T1C6UnidadeComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async unidadeInput() {
    if (!this.vp.t1_req_to_read) {
      this.mostrar_modal = true;
      if (this.vp.unidades_medida_arr.length == 0) {
        this.vp.unidades_medida_arr = (await this.ap.exportaServico(
          'ExportaUniMeds'
        )) as ExportaUniMeds[];
        if (this.vp.t1_c6_medida_cod != '')
          this.vp.t1_c6_medida_obj = this.vp.unidades_medida_arr.find(
            (x) => x.uniMed == this.vp.t1_c6_medida_cod
          );
      }
    }
  }

  public unidadeSelect() {
    this.vp.t1_c6_medida_cod = this.vp.t1_c6_medida_obj!.uniMed;
    this.vp.t1_c6_medida_des = this.vp.t1_c6_medida_obj!.desMed;
    this.mostrar_modal = false;
  }

  public unidadeClear() {
    this.vp.t1_c6_medida_obj = undefined;
    this.vp.t1_c6_medida_cod = '';
    this.vp.t1_c6_medida_des = '';
  }
}

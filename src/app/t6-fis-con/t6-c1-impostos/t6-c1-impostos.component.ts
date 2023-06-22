import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c1-impostos',
  templateUrl: './t6-c1-impostos.component.html',
  styleUrls: ['./t6-c1-impostos.component.scss']
})
export class T6C1ImpostosComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async tipoInput() {
    if (!this.vp.t6_req_to_read) {
      this.mostrar_modal = true;
      if (this.vp.t6_c1_impostos_arr.length == 0) {
        this.vp.t6_c1_impostos_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LProImp'
        )) as ExportaValorLista[];
        if (this.vp.t6_c1_impostos_cod != -1)
          this.vp.t6_c1_impostos_obj = this.vp.t6_c1_impostos_arr.find(
            (x) => Number(x.chvLis) == this.vp.t6_c1_impostos_cod
          );
      }
    }
  }

  public tipoSelect() {
    this.vp.t6_c1_impostos_cod = Number(
      this.vp.t6_c1_impostos_obj!.chvLis
    );
    this.vp.t6_c1_impostos_des = this.vp.t6_c1_impostos_obj!.desLis;
    this.mostrar_modal = false;
  }

  public tipoClear() {
    this.vp.t6_c1_impostos_obj = undefined;
    this.vp.t6_c1_impostos_cod = -1;
    this.vp.t6_c1_impostos_des = '';
  }
}

import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c15-impostos',
  templateUrl: './t1-c15-impostos.component.html',
  styleUrls: ['./t1-c15-impostos.component.scss'],
})
export class T1C15ImpostosComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async tipoInput() {
    this.mostrar_modal = true;
    if (this.vp.t1_c15_impostos_arr.length == 0) {
      this.vp.t1_c15_impostos_arr = (await this.ap.exportaServico(
        'ExportaValorLista',
        'LProImp'
      )) as ExportaValorLista[];
      if (this.vp.t1_c15_impostos_cod != -1)
        this.vp.t1_c15_impostos_obj = this.vp.t1_c15_impostos_arr.find(
          (x) => Number(x.chvLis) == this.vp.t1_c15_impostos_cod
        );
    }
  }

  public tipoSelect() {
    this.vp.t1_c15_impostos_cod = Number(this.vp.t1_c15_impostos_obj!.chvLis);
    this.vp.t1_c15_impostos_des = this.vp.t1_c15_impostos_obj!.desLis;
    this.mostrar_modal = false;
  }

  public tipoClear() {
    this.vp.t1_c15_impostos_obj = undefined;
    this.vp.t1_c15_impostos_cod = -1;
    this.vp.t1_c15_impostos_des = '';
  }
}

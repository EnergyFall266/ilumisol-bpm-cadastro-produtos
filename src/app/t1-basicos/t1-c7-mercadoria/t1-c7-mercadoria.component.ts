import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c7-mercadoria',
  templateUrl: './t1-c7-mercadoria.component.html',
  styleUrls: ['./t1-c7-mercadoria.component.scss'],
})
export class T1C7MercadoriaComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async mercadoriaInput() {
    if (!this.vp.t1_req_to_read) {
      this.mostrar_modal = true;
      if (this.vp.t1_c7_mercadoria_arr.length == 0) {
        this.vp.t1_c7_mercadoria_arr = (
          (await this.ap.exportaServico(
            'ExportaValorLista',
            'LOriMer'
          )) as ExportaValorLista[]
        ).map<ExportaValorLista>((l) => ({
          chvLis: l.chvLis + '',
          desLis: l.desLis,
        }));
        if (this.vp.t1_c7_mercadoria_cod != '')
          this.vp.t1_c7_mercadoria_obj = this.vp.t1_c7_mercadoria_arr.find(
            (x) => x.chvLis == this.vp.t1_c7_mercadoria_cod
          );
      }
    }
  }

  public mercadoriaSelect() {
    this.vp.t1_c7_mercadoria_cod = this.vp.t1_c7_mercadoria_obj?.chvLis + '';
    this.vp.t1_c7_mercadoria_des = this.vp.t1_c7_mercadoria_obj?.desLis ?? '';
    this.mostrar_modal = false;
  }

  public mercadoriaClear() {
    this.vp.t1_c7_mercadoria_obj = undefined;
    this.vp.t1_c7_mercadoria_cod = '';
    this.vp.t1_c7_mercadoria_des = '';
  }
}

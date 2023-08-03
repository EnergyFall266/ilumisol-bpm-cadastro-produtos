import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c12-enquadramento-espe',
  templateUrl: './t6-c12-enquadramento-espe.component.html',
  styleUrls: ['./t6-c12-enquadramento-espe.component.scss'],
})
export class T6C12EnquadramentoEspeComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async enquaInput() {
    this.mostrar_modal = true;
    if (this.vp.t6_c12_enqua_esp_arr.length == 0) {
      this.vp.t6_c12_enqua_esp_arr = (
        (await this.ap.exportaServico(
          'ExportaValorLista',
          'LProEpe'
        )) as ExportaValorLista[]
      ).map<ExportaValorLista>((l) => ({
        chvLis: l.chvLis + '',
        desLis: l.desLis,
      }));
      if (this.vp.t6_c12_enqua_esp_cod != -1)
        this.vp.t6_c12_enqua_esp_obj = this.vp.t6_c12_enqua_esp_arr.find(
          (x) => Number(x.chvLis) == this.vp.t6_c12_enqua_esp_cod
        );
    }
  }

  public enquaSelect() {
    this.vp.t6_c12_enqua_esp_cod = Number(this.vp.t6_c12_enqua_esp_obj!.chvLis);
    this.vp.t6_c12_enqua_esp_des = this.vp.t6_c12_enqua_esp_obj!.desLis;
    this.mostrar_modal = false;
  }

  public enquaClear() {
    this.vp.t6_c12_enqua_esp_obj = undefined;
    this.vp.t6_c12_enqua_esp_cod = -1;
    this.vp.t6_c12_enqua_esp_des = '';
  }
}

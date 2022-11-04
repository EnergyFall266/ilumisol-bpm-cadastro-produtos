import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c1-c1-tipo',
  templateUrl: './t6-c1-c1-tipo.component.html',
  styleUrls: ['./t6-c1-c1-tipo.component.scss'],
})
export class T6C1C1TipoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async tipoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t6_c1_c1_tipo_prod_arr.length == 0) {
        this.vp.t6_c1_c1_tipo_prod_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LProImp'
        )) as ExportaValorLista[];
        if (this.vp.t6_c1_c1_tipo_prod_cod != 0)
          this.vp.t6_c1_c1_tipo_prod_obj = this.vp.t6_c1_c1_tipo_prod_arr.find(
            (x) => Number(x.chvLis) == this.vp.t6_c1_c1_tipo_prod_cod
          );
      }
    }
  }

  public tipoSelect() {
    this.vp.t6_c1_c1_tipo_prod_cod = Number(
      this.vp.t6_c1_c1_tipo_prod_obj!.chvLis
    );
    this.vp.t6_c1_c1_tipo_prod_des = this.vp.t6_c1_c1_tipo_prod_obj!.desLis;
    this.mostrar_modal = false;
  }
}

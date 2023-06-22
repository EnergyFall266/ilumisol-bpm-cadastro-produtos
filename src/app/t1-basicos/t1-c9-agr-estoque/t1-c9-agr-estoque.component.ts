import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaAgrupamentos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c9-agr-estoque',
  templateUrl: './t1-c9-agr-estoque.component.html',
  styleUrls: ['./t1-c9-agr-estoque.component.scss']
})
export class T1C9AgrEstoqueComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_est: boolean = false;
  public mostrar_modal_cus: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async estoquesInput() {
    if (!this.vp.t5_req_to_read) {
      this.mostrar_modal_est = true;
      if (this.vp.t1_c9_agrestoque_arr.length == 0) {
        this.vp.t1_c9_agrestoque_arr = (await this.ap.exportaServico(
          'ExportaAgrupamentos',
          'E'
        )) as ExportaAgrupamentos[];
        if (this.vp.t1_c9_agrestoque_cod != '')
          this.vp.t1_c9_agrestoque_obj = this.vp.t1_c9_agrestoque_arr.find(
            (x) => x.codAgp == this.vp.t1_c9_agrestoque_cod
          );
      }
    }
  }

  public estoquesSelect() {
    this.vp.t1_c9_agrestoque_cod = this.vp.t1_c9_agrestoque_obj!.codAgp;
    this.vp.t1_c9_agrestoque_des = this.vp.t1_c9_agrestoque_obj!.desAgp;
    this.mostrar_modal_est = false;
  }

  public estoquesClear() {
    this.vp.t1_c9_agrestoque_obj = undefined;
    this.vp.t1_c9_agrestoque_cod = '';
    this.vp.t1_c9_agrestoque_des = '';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaFornecedores } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t2-c1-fornecedor',
  templateUrl: './t2-c1-fornecedor.component.html',
  styleUrls: ['./t2-c1-fornecedor.component.scss']
})
export class T2C1FornecedorComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async fornecedorInput() {
    this.mostrar_modal = true;
    if (this.vp.t2_c1_fornecedor_arr.length == 0) {
      this.vp.t2_c1_fornecedor_arr = (await this.ap.exportaServico(
        'ExportaFornecedores'
      )) as ExportaFornecedores[];
      if (this.vp.t2_c1_fornecedor_cod != -1)
        this.vp.t2_c1_fornecedor_obj = this.vp.t2_c1_fornecedor_arr.find(
          (x) => x.codFor == this.vp.t2_c1_fornecedor_cod
        );
    }
  }

  public fornecedorSelect() {
    this.vp.t2_c1_fornecedor_cod = this.vp.t2_c1_fornecedor_obj!.codFor;
    this.vp.t2_c1_fornecedor_des = this.vp.t2_c1_fornecedor_obj!.nomFor;
    this.mostrar_modal = false;
  }

  public fornecedorClear() {
    this.vp.t2_c1_fornecedor_obj = undefined;
    this.vp.t2_c1_fornecedor_cod = -1;
    this.vp.t2_c1_fornecedor_des = '';
  }
}

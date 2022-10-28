import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaFornecedores } from 'src/beans/WS_Beans';
import { AppService } from '../app.service';

@Component({
  selector: 'app-t2-fornecedor',
  templateUrl: './t2-fornecedor.component.html',
  styleUrls: ['./t2-fornecedor.component.scss'],
})
export class T2FornecedorComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;
  public buscando: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async fornecedorInput() {
    if (!this.vp.t2_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t2_fornecedor_arr.length == 0) {
        this.buscando = true;
        this.vp.t2_fornecedor_arr = (await this.ap.exportaServico(
          'ExportaFornecedores'
        )) as ExportaFornecedores[];
        this.buscando = false;
      }
    }
  }

  public fornecedorSelect() {
    this.vp.t2_fornecedor_cod = this.vp.t2_fornecedor_obj!.codFor;
    this.vp.t2_fornecedor_des = this.vp.t2_fornecedor_obj!.nomFor;
    this.mostrar_modal = false;
  }
}

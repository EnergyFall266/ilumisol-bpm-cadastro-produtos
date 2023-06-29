import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaEmpresas } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-c1-empresa',
  templateUrl: './c1-empresa.component.html',
  styleUrls: ['./c1-empresa.component.scss']
})
export class C1EmpresaComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async fornecedorInput() {
    this.mostrar_modal = true;
    if (this.vp.c1_empresa_arr.length == 0) {
      this.vp.c1_empresa_arr = (await this.ap.exportaServico(
        'ExportaEmpresas'
      )) as ExportaEmpresas[];
      if (this.vp.c1_empresa_cod != -1)
        this.vp.c1_empresa_obj = this.vp.c1_empresa_arr.find(
          (x) => x.codEmp == this.vp.c1_empresa_cod
        );
    }
  }

  public fornecedorSelect() {
    this.vp.c1_empresa_cod = this.vp.c1_empresa_obj!.codEmp;
    this.vp.c1_empresa_nom = this.vp.c1_empresa_obj!.nomEmp;
    this.mostrar_modal = false;
  }
}

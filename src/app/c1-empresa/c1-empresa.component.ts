import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaEmpresas } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-c1-empresa',
  templateUrl: './c1-empresa.component.html',
  styleUrls: ['./c1-empresa.component.scss'],
})
export class C1EmpresaComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_emp: boolean = false;
  public mostrar_modal_dup: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async empInput() {
    this.mostrar_modal_emp = true;
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

  public empSelect() {
    this.vp.c1_empresa_cod = this.vp.c1_empresa_obj!.codEmp;
    this.vp.c1_empresa_nom = this.vp.c1_empresa_obj!.nomEmp;
    this.mostrar_modal_emp = false;
  }

  public async dupInput() {
    this.mostrar_modal_dup = true;
    if (this.vp.c1_empresa_arr.length == 0) {
      this.vp.c1_empresa_arr = (await this.ap.exportaServico(
        'ExportaEmpresas'
      )) as ExportaEmpresas[];
      if (this.vp.c1_duplicado_stx != '')
        this.vp.c1_duplicado_sel = JSON.parse(this.vp.c1_duplicado_stx);
    }
  }

  public dupSelect() {
    this.vp.c1_duplicado_stx = JSON.stringify(this.vp.c1_duplicado_sel);
    this.vp.c1_duplicado_cod = [];
    this.vp.c1_duplicado_nom = '';
    for (const [i, e] of this.vp.c1_duplicado_sel.entries()) {
      this.vp.c1_duplicado_cod.push(e.codEmp);
      i == 0
        ? (this.vp.c1_duplicado_nom = `[${e.nomEmp}]`)
        : (this.vp.c1_duplicado_nom = `${this.vp.c1_duplicado_nom} [${e.nomEmp}]`);
    }
    this.vp.c1_duplicado_cax = JSON.stringify(this.vp.c1_duplicado_cod);
  }
}

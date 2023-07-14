import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaEmpresas } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c14-duplicado',
  templateUrl: './t1-c14-duplicado.component.html',
  styleUrls: ['./t1-c14-duplicado.component.scss'],
})
export class T1C14DuplicadoComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal_dup: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async dupInput() {
    this.mostrar_modal_dup = true;

    if (this.vp.c1_empresa_arr.length == 0)
      this.vp.c1_empresa_arr = (await this.ap.exportaServico(
        'ExportaEmpresas'
      )) as ExportaEmpresas[];

    this.vp.t1_c14_duplicado_arr = this.vp.c1_empresa_arr.filter(
      (e) => e.codEmp != this.vp.c1_empresa_cod
    );

    if (
      this.vp.t1_c14_duplicado_sel.length == 0 &&
      this.vp.t1_c14_duplicado_stx != '' &&
      this.vp.t1_c14_duplicado_stx != '[]'
    )
      this.vp.t1_c14_duplicado_sel = JSON.parse(this.vp.t1_c14_duplicado_stx);

    const selecao_clean: ExportaEmpresas[] = [];
    for (const s of this.vp.t1_c14_duplicado_sel)
      for (const d of this.vp.t1_c14_duplicado_arr)
        if (s.codEmp == d.codEmp) selecao_clean.push(s);
    this.vp.t1_c14_duplicado_sel = selecao_clean;
  }

  public dupSelect() {
    this.vp.t1_c14_duplicado_stx = JSON.stringify(this.vp.t1_c14_duplicado_sel);
    this.vp.t1_c14_duplicado_nom = '';
    for (const [i, e] of this.vp.t1_c14_duplicado_sel.entries())
      i == 0
        ? (this.vp.t1_c14_duplicado_nom = `[${e.nomEmp}]`)
        : (this.vp.t1_c14_duplicado_nom = `${this.vp.t1_c14_duplicado_nom} [${e.nomEmp}]`);
  }

  public dupClear() {
    this.vp.t1_c14_duplicado_sel = [];
    this.vp.t1_c14_duplicado_stx = '';
    this.vp.t1_c14_duplicado_nom = '';
  }
}

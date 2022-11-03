import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaCategorias, ExportaSubCategorias } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c3-c2-venda',
  templateUrl: './t1-c3-c2-venda.component.html',
  styleUrls: ['./t1-c3-c2-venda.component.scss'],
})
export class T1C3C2VendaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal_cat: boolean = false;
  public mostrar_modal_sub: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async categoriaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal_cat = true;
      if (this.vp.t1_c3_c2_categoria_arr.length == 0) {
        this.vp.t1_c3_c2_categoria_arr = (await this.ap.exportaServico(
          'ExportaCategorias'
        )) as ExportaCategorias[];
        if (this.vp.t1_c3_c2_categoria_cod != -1)
          this.vp.t1_c3_c2_categoria_obj = this.vp.t1_c3_c2_categoria_arr.find(
            (x) => x.codCtg == this.vp.t1_c3_c2_categoria_cod
          );
      }
    }
  }

  public categoriaSelect() {
    this.vp.t1_c3_c2_categoria_cod = this.vp.t1_c3_c2_categoria_obj!.codCtg;
    this.vp.t1_c3_c2_categoria_des = this.vp.t1_c3_c2_categoria_obj!.desCtg;
    this.mostrar_modal_cat = false;
  }

  public async subCategoriaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal_sub = true;
      if (this.vp.t1_c3_c2_subcategoria_arr.length == 0)
        await this.buscarSubCategorias();
      else
        for (const s of this.vp.t1_c3_c2_subcategoria_arr)
          if (s.codCtg != this.vp.t1_c3_c2_categoria_cod) {
            this.vp.t1_c3_c2_subcategoria_arr = [];
            this.vp.t1_c3_c2_subcategoria_obj = undefined;
            this.vp.t1_c3_c2_subcategoria_cod = -1;
            this.vp.t1_c3_c2_subcategoria_des = '';
            await this.buscarSubCategorias();
            break;
          }
    }
  }

  private async buscarSubCategorias() {
    this.vp.t1_c3_c2_subcategoria_arr = (await this.ap.exportaServico(
      'ExportaSubCategorias',
      this.vp.t1_c3_c2_categoria_cod
    )) as ExportaSubCategorias[];
    if (this.vp.t1_c3_c2_subcategoria_cod != -1)
      this.vp.t1_c3_c2_subcategoria_obj =
        this.vp.t1_c3_c2_subcategoria_arr.find(
          (x) => x.codSct == this.vp.t1_c3_c2_subcategoria_cod
        );
  }

  public subCategoriaSelect() {
    this.vp.t1_c3_c2_subcategoria_cod =
      this.vp.t1_c3_c2_subcategoria_obj!.codSct;
    this.vp.t1_c3_c2_subcategoria_des =
      this.vp.t1_c3_c2_subcategoria_obj!.desSct;
    this.mostrar_modal_sub = false;
  }
}

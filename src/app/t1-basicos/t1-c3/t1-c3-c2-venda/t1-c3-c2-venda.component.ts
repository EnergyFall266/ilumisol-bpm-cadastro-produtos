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

  public showModalCat: boolean = false;
  public showModalSub: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async categoriaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalCat = true;
      if (this.vp.t1_c3_c2_categoria_arr.length == 0)
        this.vp.t1_c3_c2_categoria_arr = (await this.ap.exportaServico(
          'ExportaCategorias'
        )) as ExportaCategorias[];
    }
  }

  public categoriaSelect() {
    this.vp.t1_c3_c2_categoria_cod = this.vp.t1_c3_c2_categoria_obj!.codCtg;
    this.vp.t1_c3_c2_categoria_des = this.vp.t1_c3_c2_categoria_obj!.desCtg;
    this.showModalCat = false;
  }

  public async subCategoriaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalSub = true;
      if (this.vp.t1_c3_c2_subcategoria_arr.length == 0)
        this.vp.t1_c3_c2_subcategoria_arr = (await this.ap.exportaServico(
          'ExportaSubCategorias',
          this.vp.t1_c3_c2_categoria_cod != -1
            ? this.vp.t1_c3_c2_categoria_cod
            : ''
        )) as ExportaSubCategorias[];
    }
  }

  public subCategoriaSelect() {
    this.vp.t1_c3_c2_subcategoria_cod =
      this.vp.t1_c3_c2_subcategoria_obj!.codSct;
    this.vp.t1_c3_c2_subcategoria_des =
      this.vp.t1_c3_c2_subcategoria_obj!.desSct;
    this.showModalSub = false;
  }
}

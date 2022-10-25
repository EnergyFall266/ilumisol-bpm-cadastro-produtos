import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c3-c2-venda',
  templateUrl: './t1-c3-c2-venda.component.html',
  styleUrls: ['./t1-c3-c2-venda.component.scss'],
})
export class T1C3C2VendaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalCat: boolean = false;
  public showModalSub: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public categoriaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalCat = true;
      if (this.vp.t1_c3_c2_categoria_arr.length == 0) {
      }
    }
  }

  public categoriaSelect() {
    this.showModalCat = false;
  }

  public subCategoriaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalSub = true;
      if (this.vp.t1_c3_c2_subcategoria_arr.length == 0) {
      }
    }
  }

  public subCategoriaSelect() {
    this.showModalSub = false;
  }
}

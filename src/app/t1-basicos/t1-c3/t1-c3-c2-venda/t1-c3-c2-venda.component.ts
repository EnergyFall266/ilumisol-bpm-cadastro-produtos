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
    this.showModalCat = true;
  }

  public categoriaSelect() {
    this.showModalCat = false;
  }

  public subCategoriaInput() {
    this.showModalSub = true;
  }

  public subCategoriaSelect() {
    this.showModalSub = false;
  }
}

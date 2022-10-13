import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t2-fornecedor',
  templateUrl: './t2-fornecedor.component.html',
  styleUrls: ['./t2-fornecedor.component.scss'],
})
export class T2FornecedorComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalFor: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public fornecedorInput() {
    this.showModalFor = true;
  }

  public fornecedorSelect() {
    this.showModalFor = false;
  }
}

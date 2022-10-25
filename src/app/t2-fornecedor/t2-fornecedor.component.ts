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
    if (!this.vp.t2_mandatory_to_readonly) {
      this.showModalFor = true;
      if (this.vp.t2_fornecedor_arr.length == 0) {
      }
    }
  }

  public fornecedorSelect() {
    this.showModalFor = false;
  }
}

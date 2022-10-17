import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c1-c3-substituicao',
  templateUrl: './t6-c1-c3-substituicao.component.html',
  styleUrls: ['./t6-c1-c3-substituicao.component.scss'],
})
export class T6C1C3SubstituicaoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalCof: boolean = false;
  public showModalPis: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public cofinsInput() {
    this.showModalCof = true;
  }

  public cofinsSelect() {
    this.showModalCof = false;
  }

  public pisInput() {
    this.showModalPis = true;
  }

  public pisSelect() {
    this.showModalPis = false;
  }
}

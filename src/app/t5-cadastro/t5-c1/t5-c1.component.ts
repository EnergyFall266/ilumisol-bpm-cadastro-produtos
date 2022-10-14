import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c1',
  templateUrl: './t5-c1.component.html',
  styleUrls: ['./t5-c1.component.scss'],
})
export class T5C1Component implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMas: boolean = false;
  public showModalEst: boolean = false;
  public showModalCus: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public mascaraInput() {
    this.showModalMas = true;
  }

  public mascaraSelect() {
    this.showModalMas = false;
  }

  public estoquesInput() {
    this.showModalEst = true;
  }

  public estoquesSelect() {
    this.showModalEst = false;
  }

  public custosInput() {
    this.showModalCus = true;
  }

  public custosSelect() {
    this.showModalCus = false;
  }
}

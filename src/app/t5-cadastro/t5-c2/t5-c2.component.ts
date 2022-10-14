import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c2',
  templateUrl: './t5-c2.component.html',
  styleUrls: ['./t5-c2.component.scss'],
})
export class T5C2Component implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalUn2: boolean = false;
  public showModalUn3: boolean = false;
  public showModalTc2: boolean = false;
  public showModalVc2: boolean = false;
  public showModalTc3: boolean = false;
  public showModalVc3: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public uni2Input() {
    this.showModalUn2 = true;
  }

  public uni2Select() {
    this.showModalUn2 = false;
  }

  public uni3Input() {
    this.showModalUn3 = true;
  }

  public uni3Select() {
    this.showModalUn3 = false;
  }

  public tcu2Input() {
    this.showModalTc2 = true;
  }

  public tcu2Select() {
    this.showModalTc2 = false;
  }

  public tcu3Input() {
    this.showModalTc3 = true;
  }

  public tcu3Select() {
    this.showModalTc3 = false;
  }

  public vcu2Input() {
    this.showModalVc2 = true;
  }

  public vcu2Select() {
    this.showModalVc2 = false;
  }
}

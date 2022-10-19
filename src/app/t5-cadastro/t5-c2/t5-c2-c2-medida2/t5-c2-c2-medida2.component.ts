import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c2-c2-medida2',
  templateUrl: './t5-c2-c2-medida2.component.html',
  styleUrls: ['./t5-c2-c2-medida2.component.scss'],
})
export class T5C2C2Medida2Component implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalTc2: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public tcu2Input() {
    this.showModalTc2 = true;
  }

  public tcu2Select() {
    this.showModalTc2 = false;
  }
}

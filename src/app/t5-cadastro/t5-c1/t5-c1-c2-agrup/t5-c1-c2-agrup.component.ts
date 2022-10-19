import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c1-c2-agrup',
  templateUrl: './t5-c1-c2-agrup.component.html',
  styleUrls: ['./t5-c1-c2-agrup.component.scss'],
})
export class T5C1C2AgrupComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalEst: boolean = false;
  public showModalCus: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

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

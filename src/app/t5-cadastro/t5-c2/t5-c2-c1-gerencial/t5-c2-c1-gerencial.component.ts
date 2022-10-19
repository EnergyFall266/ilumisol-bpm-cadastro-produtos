import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c2-c1-gerencial',
  templateUrl: './t5-c2-c1-gerencial.component.html',
  styleUrls: ['./t5-c2-c1-gerencial.component.scss'],
})
export class T5C2C1GerencialComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalUn2: boolean = false;
  public showModalUn3: boolean = false;

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
}

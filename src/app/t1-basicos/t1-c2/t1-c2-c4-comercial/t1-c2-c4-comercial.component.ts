import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c2-c4-comercial',
  templateUrl: './t1-c2-c4-comercial.component.html',
  styleUrls: ['./t1-c2-c4-comercial.component.scss'],
})
export class T1C2C4ComercialComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalCom: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public comercialInput() {
    this.showModalCom = true;
  }

  public comercialSelect() {
    this.showModalCom = false;
  }
}
import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c2-c2-fiscal',
  templateUrl: './t1-c2-c2-fiscal.component.html',
  styleUrls: ['./t1-c2-c2-fiscal.component.scss'],
})
export class T1C2C2FiscalComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalFis: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public fiscalInput() {
    this.showModalFis = true;
  }

  public fiscalSelect() {
    this.showModalFis = false;
  }
}

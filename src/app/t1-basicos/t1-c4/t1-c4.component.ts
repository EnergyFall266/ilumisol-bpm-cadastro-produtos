import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c4',
  templateUrl: './t1-c4.component.html',
  styleUrls: ['./t1-c4.component.scss'],
})
export class T1C4Component implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalQui: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public quimicoInput() {
    this.showModalQui = true;
  }

  public quimicoSelect() {
    this.showModalQui = false;
  }
}

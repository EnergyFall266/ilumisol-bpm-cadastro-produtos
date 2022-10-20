import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c2-c6-agrosys',
  templateUrl: './t1-c2-c6-agrosys.component.html',
  styleUrls: ['./t1-c2-c6-agrosys.component.scss'],
})
export class T1C2C6AgrosysComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalAgr: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public agrosysInput() {
    this.showModalAgr = true;
  }

  public agrosysSelect() {
    this.showModalAgr = false;
  }
}

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
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalAgr = true;
      if (this.vp.t1_c2_c6_agrosys_arr.length == 0) {
      }
    }
  }

  public agrosysSelect() {
    this.showModalAgr = false;
  }
}

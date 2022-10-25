import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c2-c3-medida3',
  templateUrl: './t5-c2-c3-medida3.component.html',
  styleUrls: ['./t5-c2-c3-medida3.component.scss'],
})
export class T5C2C3Medida3Component implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalTc3: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public tcu3Input() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalTc3 = true;
      if (this.vp.t5_c2_c3_med_3_tip_arr.length == 0) {
      }
    }
  }

  public tcu3Select() {
    this.showModalTc3 = false;
  }
}

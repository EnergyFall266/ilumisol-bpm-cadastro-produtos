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
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalTc2 = true;
      if (this.vp.t5_c2_c2_med_2_tip_arr.length == 0) {
      }
    }
  }

  public tcu2Select() {
    this.showModalTc2 = false;
  }
}

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
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalUn2 = true;
      if (this.vp.t5_c2_c1_med_2_arr.length == 0) {
      }
    }
  }

  public uni2Select() {
    this.showModalUn2 = false;
  }

  public uni3Input() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalUn3 = true;
      if (this.vp.t5_c2_c1_med_3_arr.length == 0) {
      }
    }
  }

  public uni3Select() {
    this.showModalUn3 = false;
  }
}

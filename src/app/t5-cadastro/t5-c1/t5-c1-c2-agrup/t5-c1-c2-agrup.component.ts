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
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalEst = true;
      if (this.vp.t5_c1_c2_agr_est_arr.length == 0) {
      }
    }
  }

  public estoquesSelect() {
    this.showModalEst = false;
  }

  public custosInput() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalCus = true;
      if (this.vp.t5_c1_c2_agr_cus_arr.length == 0) {
      }
    }
  }

  public custosSelect() {
    this.showModalCus = false;
  }
}

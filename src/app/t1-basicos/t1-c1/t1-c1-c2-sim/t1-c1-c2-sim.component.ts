import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c1-c2-sim',
  templateUrl: './t1-c1-c2-sim.component.html',
  styleUrls: ['./t1-c1-c2-sim.component.scss'],
})
export class T1C1C2SimComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalSim: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public similarInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalSim = true;
      if (this.vp.t1_c1_c2_item_simi_arr.length == 0) {
      }
    }
  }

  public similarSelect() {
    this.showModalSim = false;
  }
}

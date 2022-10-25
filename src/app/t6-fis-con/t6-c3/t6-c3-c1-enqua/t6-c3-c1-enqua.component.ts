import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c3-c1-enqua',
  templateUrl: './t6-c3-c1-enqua.component.html',
  styleUrls: ['./t6-c3-c1-enqua.component.scss'],
})
export class T6C3C1EnquaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalEnq: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public enquaInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalEnq = true;
      if (this.vp.t6_c3_c1_enq_esp_arr.length == 0) {
      }
    }
  }

  public enquaSelect() {
    this.showModalEnq = false;
  }
}

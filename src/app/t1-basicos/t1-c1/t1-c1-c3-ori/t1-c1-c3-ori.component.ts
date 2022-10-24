import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c1-c3-ori',
  templateUrl: './t1-c1-c3-ori.component.html',
  styleUrls: ['./t1-c1-c3-ori.component.scss'],
})
export class T1C1C3OriComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalOri: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public origemInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalOri = true;
      if (this.vp.t1_c1_c3_origem_arr.length == 0) {
      }
    }
  }

  public origemSelect() {
    this.showModalOri = false;
  }
}

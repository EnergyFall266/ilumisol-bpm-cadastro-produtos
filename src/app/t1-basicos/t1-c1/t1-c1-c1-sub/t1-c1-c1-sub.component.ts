import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c1-c1-sub',
  templateUrl: './t1-c1-c1-sub.component.html',
  styleUrls: ['./t1-c1-c1-sub.component.scss'],
})
export class T1C1C1SubComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalSub: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public substituidoInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalSub = true;
      if (this.vp.t1_c1_c1_item_subs_arr.length == 0) {
      }
    }
  }

  public substituidoSelect() {
    this.showModalSub = false;
  }
}

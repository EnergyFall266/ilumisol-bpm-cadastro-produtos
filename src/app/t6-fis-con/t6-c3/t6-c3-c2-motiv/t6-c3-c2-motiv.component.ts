import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c3-c2-motiv',
  templateUrl: './t6-c3-c2-motiv.component.html',
  styleUrls: ['./t6-c3-c2-motiv.component.scss'],
})
export class T6C3C2MotivComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMot: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public motivoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalMot = true;
      if (this.vp.t6_c3_c2_motivo_arr.length == 0) {
      }
    }
  }

  public motivoSelect() {
    this.showModalMot = false;
  }
}

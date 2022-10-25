import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t3-c1',
  templateUrl: './t3-c1.component.html',
  styleUrls: ['./t3-c1.component.scss'],
})
export class T3C1Component implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalDep: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public depositoInput() {
    if (!this.vp.t3_mandatory_to_readonly) {
      this.showModalDep = true;
      if (this.vp.t3_c1_destino_arr.length == 0) {
      }
    }
  }

  public depositoSelect() {
    this.showModalDep = false;
  }
}

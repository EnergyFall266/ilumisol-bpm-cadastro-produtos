import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c2-c7-multinivel',
  templateUrl: './t1-c2-c7-multinivel.component.html',
  styleUrls: ['./t1-c2-c7-multinivel.component.scss'],
})
export class T1C2C7MultinivelComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMul: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public multinivelInput() {
    this.showModalMul = true;
  }

  public multinivelSelect() {
    this.showModalMul = false;
  }
}

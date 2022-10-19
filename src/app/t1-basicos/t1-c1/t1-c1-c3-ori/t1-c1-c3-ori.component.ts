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
    this.showModalOri = true;
  }

  public origemSelect() {
    this.showModalOri = false;
  }
}

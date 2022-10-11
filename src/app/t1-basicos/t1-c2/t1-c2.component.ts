import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c2',
  templateUrl: './t1-c2.component.html',
  styleUrls: ['./t1-c2.component.scss'],
})
export class T1C2Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

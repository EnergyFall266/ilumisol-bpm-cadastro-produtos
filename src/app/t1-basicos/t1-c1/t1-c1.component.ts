import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c1',
  templateUrl: './t1-c1.component.html',
  styleUrls: ['./t1-c1.component.scss'],
})
export class T1C1Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

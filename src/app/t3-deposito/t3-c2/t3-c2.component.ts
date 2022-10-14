import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t3-c2',
  templateUrl: './t3-c2.component.html',
  styleUrls: ['./t3-c2.component.scss'],
})
export class T3C2Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

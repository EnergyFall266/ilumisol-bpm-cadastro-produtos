import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c2',
  templateUrl: './t6-c2.component.html',
  styleUrls: ['./t6-c2.component.scss'],
})
export class T6C2Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

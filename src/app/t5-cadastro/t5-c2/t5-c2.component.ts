import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c2',
  templateUrl: './t5-c2.component.html',
  styleUrls: ['./t5-c2.component.scss'],
})
export class T5C2Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c1',
  templateUrl: './t5-c1.component.html',
  styleUrls: ['./t5-c1.component.scss'],
})
export class T5C1Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

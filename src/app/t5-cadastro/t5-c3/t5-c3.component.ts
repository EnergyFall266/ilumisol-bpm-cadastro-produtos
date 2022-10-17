import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c3',
  templateUrl: './t5-c3.component.html',
  styleUrls: ['./t5-c3.component.scss'],
})
export class T5C3Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}
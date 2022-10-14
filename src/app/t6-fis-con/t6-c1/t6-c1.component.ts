import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c1',
  templateUrl: './t6-c1.component.html',
  styleUrls: ['./t6-c1.component.scss'],
})
export class T6C1Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

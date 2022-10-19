import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c4-c1-obs',
  templateUrl: './t6-c4-c1-obs.component.html',
  styleUrls: ['./t6-c4-c1-obs.component.scss'],
})
export class T6C4C1ObsComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

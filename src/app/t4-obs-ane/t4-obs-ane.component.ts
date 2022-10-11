import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t4-obs-ane',
  templateUrl: './t4-obs-ane.component.html',
  styleUrls: ['./t4-obs-ane.component.scss'],
})
export class T4ObsAneComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

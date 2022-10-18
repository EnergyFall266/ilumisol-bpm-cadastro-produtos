import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c3-c3-anp',
  templateUrl: './t6-c3-c3-anp.component.html',
  styleUrls: ['./t6-c3-c3-anp.component.scss'],
})
export class T6C3C3AnpComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

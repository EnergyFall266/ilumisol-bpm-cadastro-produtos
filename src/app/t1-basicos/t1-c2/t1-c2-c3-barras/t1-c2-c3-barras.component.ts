import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c2-c3-barras',
  templateUrl: './t1-c2-c3-barras.component.html',
  styleUrls: ['./t1-c2-c3-barras.component.scss'],
})
export class T1C2C3BarrasComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-basicos',
  templateUrl: './t1-basicos.component.html',
  styleUrls: ['./t1-basicos.component.scss'],
})
export class T1BasicosComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

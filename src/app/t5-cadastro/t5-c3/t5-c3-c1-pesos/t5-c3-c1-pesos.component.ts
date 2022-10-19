import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c3-c1-pesos',
  templateUrl: './t5-c3-c1-pesos.component.html',
  styleUrls: ['./t5-c3-c1-pesos.component.scss'],
})
export class T5C3C1PesosComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

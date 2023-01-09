import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t3-deposito',
  templateUrl: './t3-deposito.component.html',
  styleUrls: ['./t3-deposito.component.scss'],
})
export class T3DepositoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

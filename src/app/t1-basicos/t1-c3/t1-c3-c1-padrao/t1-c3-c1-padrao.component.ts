import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c3-c1-padrao',
  templateUrl: './t1-c3-c1-padrao.component.html',
  styleUrls: ['./t1-c3-c1-padrao.component.scss'],
})
export class T1C3C1PadraoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

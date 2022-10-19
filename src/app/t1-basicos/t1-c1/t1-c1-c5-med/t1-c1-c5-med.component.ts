import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c1-c5-med',
  templateUrl: './t1-c1-c5-med.component.html',
  styleUrls: ['./t1-c1-c5-med.component.scss'],
})
export class T1C1C5MedComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalUni: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public unidadeInput() {
    this.showModalUni = true;
  }

  public unidadeSelect() {
    this.showModalUni = false;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c3-c5-benef',
  templateUrl: './t6-c3-c5-benef.component.html',
  styleUrls: ['./t6-c3-c5-benef.component.scss'],
})
export class T6C3C5BenefComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalBen: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public benefInput() {
    this.showModalBen = true;
  }

  public benefSelect() {
    this.showModalBen = false;
  }
}

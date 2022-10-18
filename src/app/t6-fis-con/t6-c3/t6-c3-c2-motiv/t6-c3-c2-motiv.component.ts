import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c3-c2-motiv',
  templateUrl: './t6-c3-c2-motiv.component.html',
  styleUrls: ['./t6-c3-c2-motiv.component.scss'],
})
export class T6C3C2MotivComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMot: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public motivoInput() {
    this.showModalMot = true;
  }

  public motivoSelect() {
    this.showModalMot = false;
  }
}
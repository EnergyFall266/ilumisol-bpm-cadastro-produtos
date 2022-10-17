import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c2-c3-enqua',
  templateUrl: './t6-c2-c3-enqua.component.html',
  styleUrls: ['./t6-c2-c3-enqua.component.scss'],
})
export class T6C2C3EnquaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalEnq: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public enquaInput() {
    this.showModalEnq = true;
  }

  public enquaSelect() {
    this.showModalEnq = false;
  }
}

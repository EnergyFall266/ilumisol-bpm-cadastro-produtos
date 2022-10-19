import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c1-c4-fam',
  templateUrl: './t1-c1-c4-fam.component.html',
  styleUrls: ['./t1-c1-c4-fam.component.scss'],
})
export class T1C1C4FamComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalFam: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public familiaInput() {
    this.showModalFam = true;
  }

  public familiaSelect() {
    this.showModalFam = false;
  }
}

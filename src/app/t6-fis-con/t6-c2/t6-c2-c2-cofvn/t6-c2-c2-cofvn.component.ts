import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c2-c2-cofvn',
  templateUrl: './t6-c2-c2-cofvn.component.html',
  styleUrls: ['./t6-c2-c2-cofvn.component.scss'],
})
export class T6C2C2CofvnComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalSit: boolean = false;
  public showModalNat: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public situacaoInput() {
    this.showModalSit = true;
  }

  public situacaoSelect() {
    this.showModalSit = false;
  }

  public naturezaInput() {
    this.showModalNat = true;
  }

  public naturezaSelect() {
    this.showModalNat = false;
  }
}

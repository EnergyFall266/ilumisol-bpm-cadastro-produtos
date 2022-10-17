import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c2-c1-pisvn',
  templateUrl: './t6-c2-c1-pisvn.component.html',
  styleUrls: ['./t6-c2-c1-pisvn.component.scss'],
})
export class T6C2C1PisvnComponent implements OnInit {
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

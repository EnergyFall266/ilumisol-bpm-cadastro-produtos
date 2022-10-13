import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c1',
  templateUrl: './t1-c1.component.html',
  styleUrls: ['./t1-c1.component.scss'],
})
export class T1C1Component implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalSub: boolean = false;
  public showModalSim: boolean = false;
  public showModalOri: boolean = false;
  public showModalFam: boolean = false;
  public showModalUni: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public substituidoInput() {
    this.showModalSub = true;
  }

  public substituidoSelect() {
    this.showModalSub = false;
  }

  public similarInput() {
    this.showModalSim = true;
  }

  public similarSelect() {
    this.showModalSim = false;
  }

  public origemInput() {
    this.showModalOri = true;
  }

  public origemSelect() {
    this.showModalOri = false;
  }

  public familiaInput() {
    this.showModalFam = true;
  }

  public familiaSelect() {
    this.showModalFam = false;
  }

  public unidadeInput() {
    this.showModalUni = true;
  }

  public unidadeSelect() {
    this.showModalUni = false;
  }

}

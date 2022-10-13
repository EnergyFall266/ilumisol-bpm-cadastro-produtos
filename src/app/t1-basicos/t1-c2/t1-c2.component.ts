import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c2',
  templateUrl: './t1-c2.component.html',
  styleUrls: ['./t1-c2.component.scss'],
})
export class T1C2Component implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMar: boolean = false;
  public showModalFis: boolean = false;
  public showModalCom: boolean = false;
  public showModalMer: boolean = false;
  public showModalAgr: boolean = false;
  public showModalMul: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public marcaInput() {
    this.showModalMar = true;
  }

  public marcaSelect() {
    this.showModalMar = false;
  }

  public fiscalInput() {
    this.showModalFis = true;
  }

  public fiscalSelect() {
    this.showModalFis = false;
  }

  public comercialInput() {
    this.showModalCom = true;
  }

  public comercialSelect() {
    this.showModalCom = false;
  }

  public mercadoriaInput() {
    this.showModalMer = true;
  }

  public mercadoriaSelect() {
    this.showModalMer = false;
  }

  public agrosysInput() {
    this.showModalAgr = true;
  }

  public agrosysSelect() {
    this.showModalAgr = false;
  }

  public multinivelInput() {
    this.showModalMul = true;
  }

  public multinivelSelect() {
    this.showModalMul = false;
  }
}

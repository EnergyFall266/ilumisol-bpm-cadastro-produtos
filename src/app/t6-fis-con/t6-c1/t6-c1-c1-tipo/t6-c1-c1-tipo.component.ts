import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c1-c1-tipo',
  templateUrl: './t6-c1-c1-tipo.component.html',
  styleUrls: ['./t6-c1-c1-tipo.component.scss'],
})
export class T6C1C1TipoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalTip: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public tipoInput() {
    this.showModalTip = true;
  }

  public tipoSelect() {
    this.showModalTip = false;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c3-c4-pauta',
  templateUrl: './t6-c3-c4-pauta.component.html',
  styleUrls: ['./t6-c3-c4-pauta.component.scss'],
})
export class T6C3C4PautaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalPau: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public pautaInput() {
    this.showModalPau = true;
  }

  public pautaSelect() {
    this.showModalPau = false;
  }
}

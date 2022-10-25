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
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalTip = true;
      if (this.vp.t6_c1_c1_tipo_prod_arr.length == 0) {
      }
    }
  }

  public tipoSelect() {
    this.showModalTip = false;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c2-c4-compras',
  templateUrl: './t6-c2-c4-compras.component.html',
  styleUrls: ['./t6-c2-c4-compras.component.scss'],
})
export class T6C2C4ComprasComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalPis: boolean = false;
  public showModalCof: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public pisInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalPis = true;
      if (this.vp.t6_c2_c4_pis_com_arr.length == 0) {
      }
    }
  }

  public pisSelect() {
    this.showModalPis = false;
  }

  public cofInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalCof = true;
      if (this.vp.t6_c2_c4_cof_com_arr.length == 0) {
      }
    }
  }

  public cofSelect() {
    this.showModalCof = false;
  }
}

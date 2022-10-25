import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c2-c1-marca',
  templateUrl: './t1-c2-c1-marca.component.html',
  styleUrls: ['./t1-c2-c1-marca.component.scss'],
})
export class T1C2C1MarcaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMar: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public marcaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalMar = true;
      if (this.vp.t1_c2_c1_marca_arr.length == 0) {
      }
    }
  }

  public marcaSelect() {
    this.showModalMar = false;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-c2-c5-mercadoria',
  templateUrl: './t1-c2-c5-mercadoria.component.html',
  styleUrls: ['./t1-c2-c5-mercadoria.component.scss'],
})
export class T1C2C5MercadoriaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMer: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public mercadoriaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalMer = true;
      if (this.vp.t1_c2_c5_mercadoria_arr.length == 0) {
      }
    }
  }

  public mercadoriaSelect() {
    this.showModalMer = false;
  }
}

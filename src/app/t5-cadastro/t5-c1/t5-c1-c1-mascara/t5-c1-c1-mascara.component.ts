import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-c1-c1-mascara',
  templateUrl: './t5-c1-c1-mascara.component.html',
  styleUrls: ['./t5-c1-c1-mascara.component.scss'],
})
export class T5C1C1MascaraComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMas: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public mascaraInput() {
    if (!this.vp.t5_mandatory_to_readonly) {
      this.showModalMas = true;
      if (this.vp.t5_c1_c1_mascara_arr.length == 0) {
      }
    }
  }

  public mascaraSelect() {
    this.showModalMas = false;
  }
}

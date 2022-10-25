import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c1-c2-icms',
  templateUrl: './t6-c1-c2-icms.component.html',
  styleUrls: ['./t6-c1-c2-icms.component.scss'],
})
export class T6C1C2IcmsComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalEsp: boolean = false;
  public showModalRed: boolean = false;
  public showModalSub: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public especialInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalEsp = true;
      if (this.vp.t6_c1_c2_icms_especial_arr.length == 0) {
      }
    }
  }

  public especialSelect() {
    this.showModalEsp = false;
  }

  public reducaoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalRed = true;
      if (this.vp.t6_c1_c2_reducao_icms_arr.length == 0) {
      }
    }
  }

  public reducaoSelect() {
    this.showModalRed = false;
  }

  public substituidoInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalSub = true;
      if (this.vp.t6_c1_c2_icms_substituido_arr.length == 0) {
      }
    }
  }

  public substituidoSelect() {
    this.showModalSub = false;
  }
}

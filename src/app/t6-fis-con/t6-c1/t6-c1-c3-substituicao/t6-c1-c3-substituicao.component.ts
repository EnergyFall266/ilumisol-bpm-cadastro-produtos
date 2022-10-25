import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c1-c3-substituicao',
  templateUrl: './t6-c1-c3-substituicao.component.html',
  styleUrls: ['./t6-c1-c3-substituicao.component.scss'],
})
export class T6C1C3SubstituicaoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalCof: boolean = false;
  public showModalPis: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public cofinsInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalCof = true;
      if (this.vp.t6_c1_c3_cof_subs_arr.length == 0) {
      }
    }
  }

  public cofinsSelect() {
    this.showModalCof = false;
  }

  public pisInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.showModalPis = true;
      if (this.vp.t6_c1_c3_pis_subs_arr.length == 0) {
      }
    }
  }

  public pisSelect() {
    this.showModalPis = false;
  }
}

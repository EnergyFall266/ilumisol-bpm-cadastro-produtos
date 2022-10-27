import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c3-c4-pauta',
  templateUrl: './t6-c3-c4-pauta.component.html',
  styleUrls: ['./t6-c3-c4-pauta.component.scss'],
})
export class T6C3C4PautaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modalPat: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async pautaInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modalPat = true;
      if (this.vp.t6_c3_c4_pauta_arr.length == 0) {
      }
    }
  }

  public pautaSelect() {
    this.mostrar_modalPat = false;
  }
}

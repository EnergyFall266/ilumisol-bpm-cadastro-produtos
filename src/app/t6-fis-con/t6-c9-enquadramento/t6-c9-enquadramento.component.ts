import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { AppService } from 'src/app/app.service';
import { ExportaEnquadramento } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c9-enquadramento',
  templateUrl: './t6-c9-enquadramento.component.html',
  styleUrls: ['./t6-c9-enquadramento.component.scss'],
})
export class T6C9EnquadramentoComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async enquaInput() {
    this.mostrar_modal = true;
    if (this.vp.t6_c9_enqua_arr.length == 0) {
      this.vp.t6_c9_enqua_arr = (await this.ap.exportaServico(
        'ExportaEnquadramento'
      )) as ExportaEnquadramento[];
      if (this.vp.t6_c9_enqua_cod != -1)
        this.vp.t6_c9_enqua_obj = this.vp.t6_c9_enqua_arr.find(
          (x) => x.codEnq == this.vp.t6_c9_enqua_cod
        );
    }
  }

  public enquaSelect() {
    this.vp.t6_c9_enqua_cod = this.vp.t6_c9_enqua_obj!.codEnq;
    this.mostrar_modal = false;
  }

  public enquaClear() {
    this.vp.t6_c9_enqua_obj = undefined;
    this.vp.t6_c9_enqua_cod = undefined;
  }
}

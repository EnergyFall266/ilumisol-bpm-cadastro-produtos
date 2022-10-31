import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { AppService } from 'src/app/app.service';
import { ExportaEnquadramento } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t6-c2-c3-enqua',
  templateUrl: './t6-c2-c3-enqua.component.html',
  styleUrls: ['./t6-c2-c3-enqua.component.scss'],
})
export class T6C2C3EnquaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async enquaInput() {
    if (!this.vp.t6_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t6_c2_c3_enqua_arr.length == 0)
        this.vp.t6_c2_c3_enqua_arr = (await this.ap.exportaServico(
          'ExportaEnquadramento'
        )) as ExportaEnquadramento[];
    }
  }

  public enquaSelect() {
    this.vp.t6_c2_c3_enqua_cod = this.vp.t6_c2_c3_enqua_obj!.codEnq;
    this.mostrar_modal = false;
  }
}

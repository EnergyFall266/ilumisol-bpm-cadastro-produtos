import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaClasseToxicologica } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c4-c1-toxicologica',
  templateUrl: './t1-c4-c1-toxicologica.component.html',
  styleUrls: ['./t1-c4-c1-toxicologica.component.scss'],
})
export class T1C4C1ToxicologicaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async toxicoInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t1_c4_c1_toxico_arr.length == 0) {
        this.vp.t1_c4_c1_toxico_arr = (await this.ap.exportaServico(
          'ExportaClasseToxicologica'
        )) as ExportaClasseToxicologica[];
        if (this.vp.t1_c4_c1_toxico_cod != -1)
          this.vp.t1_c4_c1_toxico_obj = this.vp.t1_c4_c1_toxico_arr.find(
            (x) => x.codCto == this.vp.t1_c4_c1_toxico_cod
          );
      }
    }
  }

  public toxicoSelect() {
    this.vp.t1_c4_c1_toxico_cod = this.vp.t1_c4_c1_toxico_obj!.codCto;
    this.vp.t1_c4_c1_toxico_des = this.vp.t1_c4_c1_toxico_obj!.desCto;
    this.mostrar_modal = false;
  }
}

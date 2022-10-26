import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaMarcas } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c2-c1-marca',
  templateUrl: './t1-c2-c1-marca.component.html',
  styleUrls: ['./t1-c2-c1-marca.component.scss'],
})
export class T1C2C1MarcaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMar: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async marcaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalMar = true;
      if (this.vp.t1_c2_c1_marca_arr.length == 0)
        this.vp.t1_c2_c1_marca_arr = (await this.ap.exportaServico(
          'ExportaMarcas'
        )) as ExportaMarcas[];
    }
  }

  public marcaSelect() {
    this.vp.t1_c2_c1_marca_cod = this.vp.t1_c2_c1_marca_obj!.codMar;
    this.vp.t1_c2_c1_marca_des = this.vp.t1_c2_c1_marca_obj!.nomMar;
    this.showModalMar = false;
  }
}

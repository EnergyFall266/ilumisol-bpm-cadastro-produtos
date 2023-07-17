import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaMarcas } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c1-marca',
  templateUrl: './t1-c1-marca.component.html',
  styleUrls: ['./t1-c1-marca.component.scss'],
})
export class T1C1MarcaComponent {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async marcaInput() {
    this.mostrar_modal = true;
    if (this.vp.t1_c1_marca_arr.length == 0) {
      this.vp.t1_c1_marca_arr = (await this.ap.exportaServico(
        'ExportaMarcas'
      )) as ExportaMarcas[];
      if (this.vp.t1_c1_marca_cod != '')
        this.vp.t1_c1_marca_obj = this.vp.t1_c1_marca_arr.find(
          (x) => x.codMar == this.vp.t1_c1_marca_cod
        );
    }
  }

  public marcaSelect() {
    this.vp.t1_c1_marca_cod = this.vp.t1_c1_marca_obj!.codMar;
    this.vp.t1_c1_marca_des = this.vp.t1_c1_marca_obj!.nomMar;
    this.mostrar_modal = false;
  }

  public marcaClear() {
    this.vp.t1_c1_marca_obj = undefined;
    this.vp.t1_c1_marca_cod = '';
    this.vp.t1_c1_marca_des = '';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaValorLista } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c2-c5-mercadoria',
  templateUrl: './t1-c2-c5-mercadoria.component.html',
  styleUrls: ['./t1-c2-c5-mercadoria.component.scss'],
})
export class T1C2C5MercadoriaComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalMer: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async mercadoriaInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.showModalMer = true;
      if (this.vp.t1_c2_c5_mercadoria_arr.length == 0)
        this.vp.t1_c2_c5_mercadoria_arr = (await this.ap.exportaServico(
          'ExportaValorLista',
          'LOriMer'
        )) as ExportaValorLista[];
    }
  }

  public mercadoriaSelect() {
    this.vp.t1_c2_c5_mercadoria_cod = this.vp.t1_c2_c5_mercadoria_obj!.chvLis;
    this.vp.t1_c2_c5_mercadoria_des = this.vp.t1_c2_c5_mercadoria_obj!.desLis;
    this.showModalMer = false;
  }
}

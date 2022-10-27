import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaProdutos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c1-c1-sub',
  templateUrl: './t1-c1-c1-sub.component.html',
  styleUrls: ['./t1-c1-c1-sub.component.scss'],
})
export class T1C1C1SubComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;
  public buscando: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async substituidoInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t1_c1_c1_item_subs_arr.length == 0) {
        this.buscando = true;
        this.vp.t1_c1_c1_item_subs_arr = (await this.ap.exportaServico(
          'ExportaProdutos'
        )) as ExportaProdutos[];
        this.buscando = false;
      }
    }
  }

  public substituidoSelect() {
    this.vp.t1_c1_c1_item_subs_cod = this.vp.t1_c1_c1_item_subs_obj!.codPro;
    this.mostrar_modal = false;
  }
}

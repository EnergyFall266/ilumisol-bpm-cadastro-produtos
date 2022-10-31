import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaProdutos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c1-c2-sim',
  templateUrl: './t1-c1-c2-sim.component.html',
  styleUrls: ['./t1-c1-c2-sim.component.scss'],
})
export class T1C1C2SimComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public mostrar_modal: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async similarInput() {
    if (!this.vp.t1_mandatory_to_readonly) {
      this.mostrar_modal = true;
      if (this.vp.t1_c1_item_arr.length == 0)
        this.vp.t1_c1_item_arr = (await this.ap.exportaServico(
          'ExportaProdutos'
        )) as ExportaProdutos[];
    }
  }

  public similarSelect() {
    this.vp.t1_c1_c2_item_simi_cod = this.vp.t1_c1_c2_item_simi_obj!.codPro;
    this.mostrar_modal = false;
  }
}

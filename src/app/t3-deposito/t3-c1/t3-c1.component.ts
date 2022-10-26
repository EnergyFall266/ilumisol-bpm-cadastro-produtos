import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaDepositos } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t3-c1',
  templateUrl: './t3-c1.component.html',
  styleUrls: ['./t3-c1.component.scss'],
})
export class T3C1Component implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalDep: boolean = false;

  constructor(private ap: AppService) {}

  public ngOnInit(): void {}

  public async depositoInput() {
    if (!this.vp.t3_mandatory_to_readonly) {
      this.showModalDep = true;
      if (this.vp.t3_c1_destino_arr.length == 0)
        this.vp.t3_c1_destino_arr = (await this.ap.exportaServico(
          'ExportaDepositos'
        )) as ExportaDepositos[];
    }
  }

  public depositoSelect() {
    this.vp.t2_fornecedor_cod = this.vp.t2_fornecedor_obj!.codFor;
    this.vp.t2_fornecedor_des = this.vp.t2_fornecedor_obj!.nomFor;
    this.showModalDep = false;
  }
}

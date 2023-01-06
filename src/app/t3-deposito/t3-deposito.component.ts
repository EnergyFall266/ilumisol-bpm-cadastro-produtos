import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t3-deposito',
  templateUrl: './t3-deposito.component.html',
  styleUrls: ['./t3-deposito.component.scss'],
})
export class T3DepositoComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}

  public disabledAdicionar = () =>
    this.vp.t3_c1_destino_cod == '' ||
    this.vp.t3_c1_quan_min_vendas == undefined ||
    this.vp.t3_c2_quan_max_vendas == undefined ||
    this.vp.t3_c4_quan_mul_ven == undefined ||
    this.vp.t3_c4_quan_mul_com == undefined;

  public adicionarDeposito() {
    this.vp.t3_deposito_array.push({
      t3_c1_destino_cod: this.vp.t3_c1_destino_cod,
      t3_c1_destino_des: this.vp.t3_c1_destino_des,
      t3_c1_quan_estoque_rep: this.vp.t3_c1_quan_estoque_rep ?? 0,
      t3_c1_quan_min_vendas: this.vp.t3_c1_quan_min_vendas!,

      t3_c2_quan_estoque_min: this.vp.t3_c2_quan_estoque_min ?? 0,
      t3_c2_quan_estoque_max: this.vp.t3_c2_quan_estoque_max ?? 0,
      t3_c2_quan_max_vendas: this.vp.t3_c2_quan_max_vendas!,

      t3_c3_estoque_min: this.vp.t3_c3_estoque_min ?? 0,
      t3_c3_estoque_max: this.vp.t3_c3_estoque_max ?? 0,

      t3_c4_quan_mul_com: this.vp.t3_c4_quan_mul_com!,
      t3_c4_quan_mul_ven: this.vp.t3_c4_quan_mul_ven!,
    });

    this.cancelarDeposito();
  }

  public cancelarDeposito() {
    this.vp.t3_c1_destino_sel = [];
    this.vp.t3_c1_destino_stx = '';
    this.vp.t3_c1_destino_cod = '';
    this.vp.t3_c1_destino_des = '';
    this.vp.t3_c1_quan_estoque_rep = undefined;
    this.vp.t3_c1_quan_min_vendas = undefined;

    this.vp.t3_c2_quan_estoque_min = undefined;
    this.vp.t3_c2_quan_estoque_max = undefined;
    this.vp.t3_c2_quan_max_vendas = undefined;

    this.vp.t3_c3_estoque_min = undefined;
    this.vp.t3_c3_estoque_max = undefined;

    this.vp.t3_c4_quan_mul_ven = undefined;
    this.vp.t3_c4_quan_mul_com = undefined;
  }
}

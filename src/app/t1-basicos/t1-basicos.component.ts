import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t1-basicos',
  templateUrl: './t1-basicos.component.html',
  styleUrls: ['./t1-basicos.component.scss'],
})
export class T1BasicosComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public altura_arr: string[] = [];
  public largura_arr: string[] = [];
  public comprimento_arr: string[] = [];

  constructor() {}

  public ngOnInit(): void {}

  /*public alturaComplete(e: { originalEvent: InputEvent; query: string }) {
    const filtered: string[] = [];
    for (const f of this.vp.t1_tipo_arr)
      if (f.toLowerCase().indexOf(e.query.toLowerCase()) == 0) filtered.push(f);
    this.altura_arr = filtered;
  }

  public alturaClear = () => (this.vp.t1_altura_tipo = '');

  public larguraComplete(e: { originalEvent: InputEvent; query: string }) {
    const filtered: string[] = [];
    for (const f of this.vp.t1_tipo_arr)
      if (f.toLowerCase().indexOf(e.query.toLowerCase()) == 0) filtered.push(f);
    this.largura_arr = filtered;
  }

  public larguraClear = () => (this.vp.t1_largura_tipo = '');

  public comprimentoComplete(e: { originalEvent: InputEvent; query: string }) {
    const filtered: string[] = [];
    for (const f of this.vp.t1_tipo_arr)
      if (f.toLowerCase().indexOf(e.query.toLowerCase()) == 0) filtered.push(f);
    this.comprimento_arr = filtered;
  }

  public comprimentoClear = () => (this.vp.t1_comprimento_tipo = '');*/
}

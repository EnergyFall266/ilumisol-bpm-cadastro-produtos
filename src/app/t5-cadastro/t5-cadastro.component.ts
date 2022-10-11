import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t5-cadastro',
  templateUrl: './t5-cadastro.component.html',
  styleUrls: ['./t5-cadastro.component.scss'],
})
export class T5CadastroComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

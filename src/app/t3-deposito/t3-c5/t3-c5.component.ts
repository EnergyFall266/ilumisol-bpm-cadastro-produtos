import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { formatarNumero } from 'src/functions/General_Functions';

@Component({
  selector: 'app-t3-c5',
  templateUrl: './t3-c5.component.html',
  styleUrls: ['./t3-c5.component.scss'],
})
export class T3C5Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}

  public formatarNumero = formatarNumero;
}

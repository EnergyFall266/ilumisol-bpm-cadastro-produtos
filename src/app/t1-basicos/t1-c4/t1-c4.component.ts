import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { VP_BPM } from 'src/beans/VP_BPM';
import { ExportaGrupoQuimico } from 'src/beans/WS_Beans';

@Component({
  selector: 'app-t1-c4',
  templateUrl: './t1-c4.component.html',
  styleUrls: ['./t1-c4.component.scss'],
})
export class T1C4Component implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

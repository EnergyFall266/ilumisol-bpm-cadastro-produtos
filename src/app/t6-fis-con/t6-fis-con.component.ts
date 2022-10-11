import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-fis-con',
  templateUrl: './t6-fis-con.component.html',
  styleUrls: ['./t6-fis-con.component.scss'],
})
export class T6FisConComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}
}

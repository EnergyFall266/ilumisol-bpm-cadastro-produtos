import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-t6-c1-c2-icms',
  templateUrl: './t6-c1-c2-icms.component.html',
  styleUrls: ['./t6-c1-c2-icms.component.scss'],
})
export class T6C1C2IcmsComponent implements OnInit {
  @Input() vp!: VP_BPM;

  public showModalEsp: boolean = false;
  public showModalRed: boolean = false;
  public showModalSub: boolean = false;

  constructor() {}

  public ngOnInit(): void {}

  public especialInput() {
    this.showModalEsp = true;
  }

  public especialSelect() {
    this.showModalEsp = false;
  }

  public reducaoInput() {
    this.showModalRed = true;
  }

  public reducaoSelect() {
    this.showModalRed = false;
  }

  public substituidoInput() {
    this.showModalSub = true;
  }

  public substituidoSelect() {
    this.showModalSub = false;
  }
}

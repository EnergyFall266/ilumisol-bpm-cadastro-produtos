import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as gedf from 'prisma_prismafunctions';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-t1-c13-anexo',
  templateUrl: './t1-c13-anexo.component.html',
  styleUrls: ['./t1-c13-anexo.component.scss'],
})
export class T1C13AnexoComponent {
  @Input() vp!: VP_BPM;
  @ViewChild('fu') fu!: FileUpload;

  constructor() {}

  public ngOnInit(): void {}

  public sn = gedf.simplifyName;
  public fb = gedf.formatBytes;
  public ct = gedf.checkEnviadoTemplate;

  public escolherDocFU = () => {
    this.fu.files = this.fu.files.filter(
      (f) =>
        this.vp.t1_c13_file_GED.findIndex(
          (s) => this.sn(s.arquivoGED?.title ?? '') == this.sn(f.name)
        ) == -1
    );
    this.vp.t1_c13_file_TS = this.fu.files;
  };

  public removerDocFU = (event: Event, file: File) => {
    this.fu.remove(event, this.fu.files.indexOf(file));
    this.vp.t1_c13_file_TS = this.fu.files;
  };

  public descarregarDocGED = async (id: string) =>
    window.open(await gedf.requestDocumentDownload(id, this.vp.token));

  public excluirDocGED = async (anexo: gedf.Anexo) => {
    if (await gedf.deleteDocument(anexo.gedId!, this.vp.token)) {
      this.vp.t1_c13_file_GED = this.vp.t1_c13_file_GED.filter(
        (x) => anexo.gedId !== x.gedId
      );
      if (this.vp.t1_c13_file_GED.length == 0) this.vp.t1_c13_pasta_id = '';
    }
  };
}

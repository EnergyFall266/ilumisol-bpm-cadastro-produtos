import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as gedf from 'prisma_prismafunctions';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-t6-c14-anexo',
  templateUrl: './t6-c14-anexo.component.html',
  styleUrls: ['./t6-c14-anexo.component.scss'],
})
export class T6C14AnexoComponent {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}

  public sn = gedf.simplifyName;

  public escolherDocFU = (fu: FileUpload) =>
    (this.vp.t6_c14_file_TS = fu.files);

  public removerDocFU = (fu: FileUpload): void => {
    fu.clear();
    this.vp.t6_c14_file_TS = fu.files;
  };

  public descarregarDocGED = async (id: string) =>
    window.open(await gedf.requestDocumentDownload(id, this.vp.token));

  public excluirDocGED = async (anexo: gedf.Anexo) => {
    if (await gedf.deleteDocument(anexo.gedId!, this.vp.token)) {
      this.vp.t6_c14_file_GED = this.vp.t6_c14_file_GED.filter(
        (x) => anexo.gedId !== x.gedId
      );
      if (this.vp.t6_c14_file_GED.length == 0)
        this.vp.t6_c14_pasta_id = '';
    }
  };
}

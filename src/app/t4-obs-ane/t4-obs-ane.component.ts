import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as gedf from 'prisma_prismafunctions';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-t4-obs-ane',
  templateUrl: './t4-obs-ane.component.html',
  styleUrls: ['./t4-obs-ane.component.scss'],
})
export class T4ObsAneComponent implements OnInit {
  @Input() vp!: VP_BPM;

  constructor() {}

  public ngOnInit(): void {}

  public sn = gedf.simplifyName;
  public ct = gedf.checkEnviadoTemplate;

  public escolherDocumentoFileUpload = (fu: FileUpload) =>
    (this.vp.t4_anexo_files = fu.files);

  public removerDocumentoFileUpload = (fu: FileUpload): void => {
    fu.clear();
    this.vp.t4_anexo_files = [];
  };

  public descarregarDocumentoGED = async (id: string) =>
    window.open(await gedf.requestDocumentDownload(id, this.vp.token));

  public excluirDocumentoGED = async (anexo: gedf.Anexo) => {
    if (await gedf.deleteDocument(anexo.gedId!, this.vp.token)) {
      this.vp.t4_anexo_ged_arr = this.vp.t4_anexo_ged_arr.filter(
        (x) => anexo.gedId !== x.gedId
      );
      if (this.vp.t4_anexo_ged_arr.length == 0) this.vp.t4_anexo_pasta_id = '';
    }
  };
}

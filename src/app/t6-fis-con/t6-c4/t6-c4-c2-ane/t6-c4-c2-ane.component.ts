import { Component, Input, OnInit } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import * as gedf from 'prisma_prismafunctions';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-t6-c4-c2-ane',
  templateUrl: './t6-c4-c2-ane.component.html',
  styleUrls: ['./t6-c4-c2-ane.component.scss'],
})
export class T6C4C2AneComponent implements OnInit {
  @Input() vp!: VP_BPM;

  private anexos_ged_temp: gedf.Anexo[] = [];

  constructor() {}

  public ngOnInit(): void {}

  public sn = gedf.simplifyName;
  public ct = gedf.checkEnviadoTemplate;

  public escolherDocumentoFileUpload = (fu: FileUpload) =>
    (this.vp.t6_c4_c2_anexo_files = fu.files);

  public removerDocumentoFileUpload = (fu: FileUpload): void => {
    fu.clear();
    this.vp.t6_c4_c2_anexo_files = fu.files;
  };

  public descarregarDocumentoGED = async (id: string) =>
    window.open(await gedf.requestDocumentDownload(id, this.vp.token));

  public excluirDocumentoGED = async (anexo: gedf.Anexo) => {
    if (await gedf.deleteDocument(anexo.gedId!, this.vp.token)) {
      this.vp.t6_c4_c2_anexo_ged_arr = this.vp.t6_c4_c2_anexo_ged_arr.filter(
        (x) => anexo.gedId !== x.gedId
      );
      if (this.vp.t6_c4_c2_anexo_ged_arr.length == 0)
        this.vp.t6_c4_c2_anexo_pasta_id = '';
    }
  };

  private recarregarDocumentosGED = async () => {
    if (this.vp.t6_c4_c2_anexo_pasta_id != '')
      this.vp.t6_c4_c2_anexo_ged_arr = (
        await gedf.folderList(0, this.vp.token, this.vp.t6_c4_c2_anexo_pasta_id)
      ).files.map(
        (d): gedf.Anexo => ({
          gedId: d.id,
          arquivoGED: d,
          enviado: true,
          estadoGED: d.status == 'PUBLISHED' ? 'Publicado' : 'Pendente',
          classTemplateGED:
            d.status == 'PUBLISHED' ? 'bg-green-600' : 'bg-yellow-500',
        })
      );
  };

  public enviarDocumentos = async (fu: FileUpload): Promise<void> => {
    await this.preparar_documentos().catch(this.print_error);
    /*const p = await pegarPastas(this.vp, this.vp.t6_c4_anexo_pasta_nome);
    if (p) {
      this.vp.ged_pasta_pai_id = p.paiId;
      this.vp.ged_pasta_protocolo_id = p.proId;
      this.vp.t6_c4_anexo_pasta_id = p.panId;
      if (
        this.anexos_ged_temp.length == (await this.processar_documentos_GED())
      )
        await this.recarregarDocumentosGED();
      anexosUploader.clear();
      this.vp.t6_c4_anexo_files = [];
    }*/
  };

  private preparar_documentos = async (): Promise<void> => {
    this.vp.overlay = true;
    this.anexos_ged_temp = [];

    for (let i in this.vp.t6_c4_c2_anexo_files) {
      let f: File = this.vp.t6_c4_c2_anexo_files[i];
      this.anexos_ged_temp.push({
        arquivoFile: f,
        simpleName: this.sn(f.name),
        enviado: this.ct(this.vp.t6_c4_c2_anexo_ged_arr, f.name),
      });
      const reader: FileReader = new FileReader();
      reader.readAsArrayBuffer(f);
      reader.onloadend = (e) => {
        console.dir('onloadend()');
        console.dir(e);
        this.anexos_ged_temp[i].byteArray = new Uint8Array(
          e.target?.result as ArrayBuffer
        );
      };
    }
  };

  private processar_documentos_GED = async (): Promise<number> => {
    var checkDocuments: number = 0;
    for (const i in this.anexos_ged_temp) {
      var a = this.anexos_ged_temp[i];
      if (a.enviado) checkDocuments++;
      else
        await gedf
          .sendDocument(
            this.vp.t6_c4_c2_anexo_pasta_id,
            a,
            this.vp.user_fullname,
            this.vp.token
          )
          .then((s) => {
            this.anexos_ged_temp[i] = s;
            checkDocuments++;
          })
          .catch(this.print_error);
    }

    return checkDocuments;
  };

  private print_error = (e: any): void =>
    console.error({ title: 'Anexos print_error', error: e });
}
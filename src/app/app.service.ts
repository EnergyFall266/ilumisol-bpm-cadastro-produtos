import { Injectable } from '@angular/core';
import { Anexo } from 'prisma_prismafunctions';
import { VP_BPM } from 'src/beans/VP_BPM';
import { CadastroRoot } from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';
import { wsG5Cadastro, wsG5Exporta } from 'src/functions/WS_Axios';
import * as gedf from 'prisma_prismafunctions';
import { checkFolder } from 'prisma_prismafunctions';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public anexos_ged_temp: gedf.Anexo[] = [];
  constructor() {}

  public async pegarPastasGED(vp: VP_BPM, scf: string) {
    const paiId: string = await checkFolder(
      vp.token,
      {
        name: vp.ged_pasta_pai_nome,
        description: vp.ged_pasta_pai_nome,
        permissions: [environment.ged_papel],
        inheritedPermission: true,
      },
      ''
    );
    if (paiId == '') return;

    const proId: string = await checkFolder(
      vp.token,
      {
        name: vp.ged_pasta_processo_nome,
        description: vp.ged_pasta_processo_nome,
        parent: paiId,
        permissions: [environment.ged_papel],
        inheritedPermission: true,
      },
      paiId
    );

    if (proId == '') return;

    const scfId: string = await checkFolder(
      vp.token,
      {
        name: scf,
        description: scf,
        parent: proId,
        permissions: [environment.ged_papel],
        inheritedPermission: true,
      },
      proId
    );
    if (scfId == '') return;

    return { paiId, proId, scfId };
  }

  public async exportaServico(port: string, body: string | number = '') {
    var r;
    if (port == 'ExportaFamilias' && body != '')
      r = await wsG5Exporta(port, `{ "codOri": "${body}" }`);
    else if (port == 'ExportaAgrupamentos')
      r = await wsG5Exporta(port, `{ "tipAgp": "${body}" }`);
    else if (port == 'ExportaValorLista')
      r = await wsG5Exporta(port, `{ "nomLis": "${body}" }`);
    else if (port == 'ExportaSubCategorias' && body != -1)
      r = await wsG5Exporta(port, `{ "codCtg": ${body} }`);
    else r = await wsG5Exporta(port);

    if ((port == 'ExportaProdutos' || port == 'ExportaProAgs') && r.produtos)
      return Array.isArray(r.produtos) ? r.produtos : [r.produtos];
    else if (port == 'ExportaOrigens' && r.origens)
      return Array.isArray(r.origens) ? r.origens : [r.origens];
    else if (port == 'ExportaFamilias' && r.familias)
      return Array.isArray(r.familias) ? r.familias : [r.familias];
    else if (port == 'ExportaUniMeds' && r.unidadesMedida)
      return Array.isArray(r.unidadesMedida)
        ? r.unidadesMedida
        : [r.unidadesMedida];
    else if (port == 'ExportaMarcas' && r.marcas)
      return Array.isArray(r.marcas) ? r.marcas : [r.marcas];
    else if (port == 'ExportaClaFis' && r.classificacoes)
      return Array.isArray(r.classificacoes)
        ? r.classificacoes
        : [r.classificacoes];
    else if (port == 'ExportaAgrupamentos' && r.agrupamentos)
      return Array.isArray(r.agrupamentos) ? r.agrupamentos : [r.agrupamentos];
    else if (port == 'ExportaValorLista' && r.lista)
      return Array.isArray(r.lista) ? r.lista : [r.lista];
    else if (port == 'ExportaCategorias' && r.categorias)
      return Array.isArray(r.categorias) ? r.categorias : [r.categorias];
    else if (port == 'ExportaSubCategorias' && r.subCategorias)
      return Array.isArray(r.subCategorias)
        ? r.subCategorias
        : [r.subCategorias];
    else if (port == 'ExportaGrupoQuimico' && r.grupos)
      return Array.isArray(r.grupos) ? r.grupos : [r.grupos];
    else if (port == 'ExportaFornecedores' && r.fornecedores)
      return Array.isArray(r.fornecedores) ? r.fornecedores : [r.fornecedores];
    else if (port == 'ExportaDepositos' && r.depositos)
      return Array.isArray(r.depositos) ? r.depositos : [r.depositos];
    else if (port == 'ExportaICMSEsp' && r.ICMS)
      return Array.isArray(r.ICMS) ? r.ICMS : [r.ICMS];
    else if (port == 'ExportaReducaoICMS' && r.reducao)
      return Array.isArray(r.reducao) ? r.reducao : [r.reducao];
    else if (port == 'ExportaSubstituicao' && r.substituicoes)
      return Array.isArray(r.substituicoes)
        ? r.substituicoes
        : [r.substituicoes];
    else if (port == 'ExportaEnquadramento' && r.enquadramentos)
      return Array.isArray(r.enquadramentos)
        ? r.enquadramentos
        : [r.enquadramentos];
    else if (port == 'ExportaMascaraDerivacao' && r.mascaras)
      return Array.isArray(r.mascaras) ? r.mascaras : [r.mascaras];
    return [];
  }

  public async cadastroService(vp: VP_BPM) {
    const c: CadastroRoot = {
      produto: {},
    };

    const r = wsG5Cadastro(JSON.stringify(c));
  }

  public sn = gedf.simplifyName;
  public ct = gedf.checkEnviadoTemplate;

  public enviarDocumentos = async (
    vp: VP_BPM,
    anexo_pasta_nome: string,
    anexo_pasta_id: string,
    anexo_files: File[],
    anexo_ged_arr: Anexo[]
  ): Promise<void> => {
    await this.prepararDocumentos(anexo_files, anexo_ged_arr).catch(
      this.printError
    );
    const p = await this.pegarPastasGED(vp, anexo_pasta_nome);
    if (p) {
      vp.ged_pasta_pai_id = p.paiId;
      vp.ged_pasta_processo_id = p.proId;
      anexo_pasta_id = p.scfId;
      if (
        this.anexos_ged_temp.length ==
        (await this.processarDocumentosGED(vp, anexo_pasta_id))
      )
        anexo_files = [];
    }
  };

  private prepararDocumentos = async (
    anexo_files: File[],
    anexo_ged_arr: Anexo[]
  ): Promise<void> => {
    this.anexos_ged_temp = [];

    for (let i in anexo_files) {
      let f: File = anexo_files[i];
      this.anexos_ged_temp.push({
        arquivoFile: f,
        simpleName: this.sn(f.name),
        enviado: this.ct(anexo_ged_arr, f.name),
      });

      const reader: FileReader = new FileReader();
      reader.readAsArrayBuffer(f);
      reader.onloadend = (e) => {
        this.anexos_ged_temp[i].byteArray = new Uint8Array(
          e.target?.result as ArrayBuffer
        );
      };
    }
  };

  private processarDocumentosGED = async (
    vp: VP_BPM,
    anexo_pasta_id: string
  ): Promise<number> => {
    var checkDocuments: number = 0;

    for (const i in this.anexos_ged_temp) {
      var a = this.anexos_ged_temp[i];
      if (a.enviado) checkDocuments++;
      else
        await gedf
          .sendDocument(anexo_pasta_id, a, vp.user_fullname, vp.token)
          .then((s) => {
            this.anexos_ged_temp[i] = s;
            checkDocuments++;
          })
          .catch(this.printError);
    }
    return checkDocuments;
  };

  private printError = (e: any): void =>
    console.error({ title: 'Anexos print_error', error: e });
}

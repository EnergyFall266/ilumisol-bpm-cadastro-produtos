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
      produto: {
        //Dados básicos
        codOri: vp.t1_c1_c3_origem_cod,
        codFam: vp.t1_c1_c4_familia_cod,
        desPro: vp.t1_c1_descricao,
        uniMed: vp.t1_c1_c5_medida_cod,

        codMar: vp.t1_c2_c1_marca_cod,
        codClf: vp.t1_c2_c2_clafiscal_cod,
        codAgc: vp.t1_c2_c4_agrupamento_cod,
        oriMer: vp.t1_c2_c5_mercadoria_cod,
        intAgs: vp.t1_c2_c6_integra_agrosys,
        proAgs: vp.t1_c2_c6_agrosys_cod,
        codAga: vp.t1_c2_c7_multinivel_cod,

        indReq: vp.t1_c3_c1_requisitado[0],
        indVen: vp.t1_c3_c1_vendido[0],
        indCpr: vp.t1_c3_c1_comprado[0],
        indOct: vp.t1_c3_c1_orcamento[0],
        proUpl: vp.t1_c3_vendido_upl[0],
        emiRec: vp.t1_c3_receita[0],
        venVir: vp.t1_c3_c2_venda_virtual[0],
        codCtg: vp.t1_c3_c2_categoria_cod,
        codSct: vp.t1_c3_c2_subcategoria_cod,
        nroOnu: vp.t1_c3_numero_onu,
        codCto: vp.t1_c4_classe_toxicologica ?? 0,
        codCri: vp.t1_c4_classe_risco,
        codNri: vp.t1_c4_numero_risco,
        nroMap: vp.t1_c4_numero_mapa,
        codQui: vp.t1_c4_quimico_cod,

        //Dados de depósito
        qtdMin: vp.t3_c1_quan_min_vendas,
        qtdMax: vp.t3_c2_quan_max_vendas,
        qtdMve: vp.t3_c4_quan_mul_ven,
        qtdMlt: vp.t3_c4_quan_mul_com,

        //Dados do cadastro
        desNfv: vp.t5_c1_descricao,
        codMdp: vp.t5_c1_c1_mascara_cod,
        codAge: vp.t5_c1_c2_agr_est_cod,
        codAgu: vp.t5_c1_c2_agr_cus_cod,

        uniMe2: vp.t5_c2_c1_med_2_cod,
        uniMe3: vp.t5_c2_c1_med_3_cod,

        pesBru: vp.t5_c3_c1_peso_bruto,
        pesLiq: vp.t5_c3_c1_peso_liquido,

        //Dados fiscais e contábeis
        proImp: vp.t6_c1_c1_tipo_prod_cod,
        codTic: vp.t6_c1_c2_icms_especial_cod,
        codTrd: vp.t6_c1_c2_reducao_icms_cod,
        codTst: vp.t6_c1_c3_icm_subs_cod,
        codStc: vp.t6_c1_c3_cof_subs_cod,
        codStp: vp.t6_c1_c3_pis_subs_cod,
        recPis: vp.t6_c1_pis_recu[0],
        recCof: vp.t6_c1_cof_recu[0],
        triPis: vp.t6_c1_pis_trib[0],
        triCof: vp.t6_c1_cof_trib[0],

        cstPis: vp.t6_c2_c1_pis_ven_cod,
        natPis: vp.t6_c2_c1_pis_nat_cod ?? 0,
        cstCof: vp.t6_c2_c2_cof_ven_cod,
        natCof: vp.t6_c2_c2_cof_nat_cod ?? 0,
        codEnq: vp.t6_c2_c3_enqua_cod,
        cstPic: vp.t6_c2_c4_pis_com_cod,
        cstCoc: vp.t6_c2_c4_cof_com_cod,
        indFpr: vp.t6_c2_usa_pro_for[0],
        perFun: vp.t6_c2_funrural,
        perGil: vp.t6_c2_gilrat,

        perSen: vp.t6_c3_senart,
        proEpe: vp.t6_c3_c1_enq_esp_cod,
        motDes: vp.t6_c3_c2_motivo_cod,
        codCes: vp.t6_c3_substituicao,
        codAnp: vp.t6_c3_c3_anp_cod,
        desAnp: vp.t6_c3_c3_anp_des,
        calFun: vp.t6_c3_cal_fun[0],
        calSen: vp.t6_c3_cal_sen[0],
        claPro: 1,
        tipPro: 'C',
        numOri: 55,

        //Derivação
        derivacao: [
          {
            codBar: vp.t1_c2_c3_barras,
            tipCn2: vp.t5_c2_c2_med_2_tip_cod,
            vlrCn2: vp.t5_c2_c2_med_2_val ?? 0,
            tipCn3: vp.t5_c2_c3_med_3_tip_cod,
            vlrCn3: vp.t5_c2_c3_med_3_val ?? 0,
          },
        ],

        //Fornecedor X Produto
        ligProFor: [
          {
            codFor: vp.t2_fornecedor_cod,
            proFor: vp.t2_produto_fornecedor,
            qtdMlt: vp.t2_quantidade_multipla ?? 0,
            qtdMax: vp.t2_quantidade_maxima ?? 0,
            qtdMin: vp.t2_quantidade_minima ?? 0,
            recIpi: 'S',
            recIcm: 'S',
          },
        ],

        //Produto X Depósito
        ligProDep: [
          {
            codDep: vp.t3_c1_destino_cod,
            estRep: vp.t3_c1_quan_estoque_rep ?? 0,
            estMin: vp.t3_c2_quan_estoque_min ?? 0,
            estMax: vp.t3_c2_quan_estoque_max ?? 0,
            estMid: vp.t3_c3_estoque_min ?? 0,
            estMad: vp.t3_c3_estoque_max ?? 0,
          },
        ],
      },
    };

    return wsG5Cadastro(JSON.stringify(c));
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

import { Injectable } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { CadastroRoot, LigProDep } from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';
import { wsG5Cadastro, wsG5Exporta } from 'src/functions/WS_Axios';
import * as ged from 'prisma_prismafunctions';

@Injectable({ providedIn: 'root' })
export class AppService {
  private anexos_ged_temp: ged.Anexo[] = [];

  constructor() {}

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

    if (port == 'ExportaProdutos' && r.produtos)
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
    else if (
      (port == 'ExportaClasseToxicologica' || port == 'ExportaClasseRisco') &&
      r.classes
    )
      return Array.isArray(r.classes) ? r.classes : [r.classes];
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

  private sn = ged.simplifyName;
  private ct = ged.checkEnviadoTemplate;

  public enviarDocs = async (vp: VP_BPM, t: string) => {
    if (t == 'c') {
      await this.prepararDocs(
        vp.t5_file_TS,
        vp.t5_file_GED
      );
      var p = await this.pegarPastasGED(vp, vp.t5_pasta_nome);
    } else if (t == 'f') {
      await this.prepararDocs(
        vp.t6_c4_c2_anexo_files,
        vp.t6_c4_c2_anexo_ged_arr
      );
      var p = await this.pegarPastasGED(vp, vp.t6_c4_c2_anexo_pasta_nome);
    }

    if (p) {
      vp.ged_pasta_pai_id = p.paiId;
      vp.ged_pasta_processo_id = p.proId;
      if (t == 'c') vp.t5_pasta_id = p.scfId;
      else if (t == 'f') vp.t6_c4_c2_anexo_pasta_id = p.scfId;

      if (
        this.anexos_ged_temp.length ==
        (await this.processarDocsGED(vp, p.scfId))
      ) {
        if (t == 'c') vp.t5_file_TS = [];
        else if (t == 'f') vp.t6_c4_c2_anexo_files = [];
        this.anexos_ged_temp = [];
      }
    }

    return vp;
  };

  private prepararDocs = async (files: File[], anexos_arr: ged.Anexo[]) => {
    this.anexos_ged_temp = [];

    for (const i in files) {
      const f: File = files[i];
      this.anexos_ged_temp.push({
        arquivoFile: f,
        simpleName: this.sn(f.name),
        enviado: this.ct(anexos_arr, f.name),
      });
      const reader: FileReader = new FileReader();
      reader.readAsArrayBuffer(f);
      reader.onloadend = (e) =>
        (this.anexos_ged_temp[i].byteArray = new Uint8Array(
          e.target?.result as ArrayBuffer
        ));
    }
  };

  private async pegarPastasGED(vp: VP_BPM, scf: string) {
    const paiId: string = await ged.checkFolder(
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

    const proId: string = await ged.checkFolder(
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

    const scfId: string = await ged.checkFolder(
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

  private processarDocsGED = async (vp: VP_BPM, pid: string) => {
    var check_docs: number = 0;

    for (const i in this.anexos_ged_temp) {
      var a = this.anexos_ged_temp[i];
      if (a.enviado) check_docs++;
      else
        await ged.sendDocument(pid, a, vp.user_fullname, vp.token).then((s) => {
          this.anexos_ged_temp[i] = s;
          check_docs++;
        });
    }

    return check_docs;
  };

  public async getAllDocs(vp: VP_BPM) {
    if (vp.t5_pasta_id != '')
      vp.t5_file_GED = (
        await ged.folderList(0, vp.token, vp.t5_pasta_id)
      ).files.map((d) => ({ gedId: d.id, arquivoGED: d, enviado: true }));
    if (vp.t6_c4_c2_anexo_pasta_id != '')
      vp.t6_c4_c2_anexo_ged_arr = (
        await ged.folderList(0, vp.token, vp.t6_c4_c2_anexo_pasta_id)
      ).files.map((d) => ({ gedId: d.id, arquivoGED: d, enviado: true }));

    return vp;
  }

  public async cadastroService(vp: VP_BPM) {
    const d: LigProDep[] = [];
    vp.t3_c1_destino_sel = JSON.parse(vp.t3_c1_destino_stx);
    for (const i of vp.t3_c1_destino_sel)
      d.push({
        codDep: i.codDep,
        estRep: vp.t3_c1_quan_estoque_rep ?? 0,
        estMin: vp.t3_c2_quan_estoque_min ?? 0,
        estMax: vp.t3_c2_quan_estoque_max ?? 0,
        estMid: vp.t3_c3_estoque_min ?? 0,
        estMad: vp.t3_c3_estoque_max ?? 0,
      });

    const c: CadastroRoot = {
      produto: {
        //Dados básicos
        codOri: vp.t1_c4_origem_cod,
        codFam: vp.t1_c5_familia_cod,
        desPro: vp.t1_descricao_prod,
        uniMed: vp.t1_c6_medida_cod,

        codMar: vp.t1_c1_marca_cod,
        codClf: vp.t1_c3_clafiscal_cod,
        codAgc: vp.t1_c8_agrcomercial_cod,
        oriMer: vp.t1_c7_mercadoria_cod,
        codAga: vp.t1_c11_multinivel_cod,

        indReq: vp.t1_requisitado[0],
        indVen: vp.t1_vendido[0],
        indCpr: vp.t1_comprado[0],
        indOct: vp.t1_orcamento[0],

        //Dados de depósito
        qtdMin: vp.t3_c1_quan_min_vendas,
        qtdMax: vp.t3_c2_quan_max_vendas,
        qtdMve: vp.t3_c4_quan_mul_ven,
        qtdMlt: vp.t3_c4_quan_mul_com,

        //Dados do cadastro
        desNfv: vp.t1_descricao_fiscal,
        codMdp: vp.t5_c1_mascara_cod,
        codAge: vp.t1_c9_agrestoque_cod,
        codAgu: vp.t1_c10_agrcusto_cod,

        uniMe2: vp.t5_c2_medida2_cod,
        uniMe3: vp.t5_c3_medida3_cod,

        pesBru: vp.t5_peso_bruto,
        pesLiq: vp.t5_peso_liquido,

        //Dados fiscais e contábeis
        proImp: vp.t6_c1_impostos_cod,
        codTic: vp.t6_c2_icms_espe_cod,
        codTrd: vp.t6_c3_redu_icms_cod,
        codTst: vp.t6_c4_icms_subs_cod,
        codStc: vp.t6_c5_cof_subs_cod,
        codStp: vp.t6_c9_pis_subs_cod,
        recPis: vp.t6_recupera_pis[0],
        recCof: vp.t6_recupera_cof[0],
        triPis: vp.t6_tributa_pis[0],
        triCof: vp.t6_tributa_cof[0],

        cstPis: vp.t6_c7_s_p_ven_cod,
        natPis: vp.t6_natureza_pis ?? 0,
        cstCof: vp.t6_c8_s_c_ven_cod,
        natCof: vp.t6_natureza_cof ?? 0,
        codEnq: vp.t6_c9_enqua_cod,
        cstPic: vp.t6_c10_s_p_com_cod,
        cstCoc: vp.t6_c11_s_c_com_cod,
        indFpr: vp.t6_produ_forne[0],
        perFun: vp.t6_funrural,
        perGil: vp.t6_gilrat,

        perSen: vp.t6_senart,
        proEpe: vp.t6_c12_enqua_esp_cod,
        motDes: vp.t6_c13_motivo_cod,
        codCes: vp.t6_espe_subs_trub,
        codAnp: vp.t6_anp_cod,
        desAnp: vp.t6_anp_des,
        calFun: vp.t6_c3_cal_fun[0],
        calSen: vp.t6_c3_cal_sen[0],
        claPro: 1,
        tipPro: 'C',
        numOri: 55,

        //Derivação
        derivacao: [
          {
            codBar: vp.t1_barras,
            tipCn2: vp.t5_c4_conversao2_cod,
            vlrCn2: vp.t5_valor2 ?? 0,
            tipCn3: vp.t5_c5_conversao3_cod,
            vlrCn3: vp.t5_valor3 ?? 0,
          },
        ],

        //Fornecedor X Produto - Possível
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
        ligProDep: d,
      },
    };

    return await wsG5Cadastro(JSON.stringify(c));
  }
}

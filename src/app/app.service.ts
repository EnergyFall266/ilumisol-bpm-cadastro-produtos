import { Injectable } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { LigProDep, Produto } from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';
import { wsG5Exporta } from 'src/functions/WS_Axios';
import * as ged from 'prisma_prismafunctions';

@Injectable({ providedIn: 'root' })
export class AppService {
  private anexos_ged_temp: ged.Anexo[] = [];

  constructor() {}

  public async exportaServico(port: string, body: string | number = '{}') {
    var r;
    if (port == 'ExportaAgrupamentos')
      r = await wsG5Exporta(port, `{ "tipAgp": "${body}" }`);
    else if (port == 'ExportaValorLista')
      r = await wsG5Exporta(port, `{ "nomLis": "${body}" }`);
    else if (port == 'ExportaSubCategorias' && body != -1)
      r = await wsG5Exporta(port, `{ "codCtg": ${body} }`);
    else r = await wsG5Exporta(port, body + '');

    if (port == 'ExportaEmpresas' && r.empresas)
      return Array.isArray(r.empresas) ? r.empresas : [r.empresas];
    else if (port == 'ExportaProdutos' && r.produtos)
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
      await this.prepararDocs(vp.t1_c13_file_TS, vp.t1_c13_file_GED);
      var p = await this.pegarPastasGED(vp, vp.t1_c13_pasta_nom);
    } else {
      await this.prepararDocs(vp.t6_c14_file_TS, vp.t6_c14_file_GED);
      var p = await this.pegarPastasGED(vp, vp.t6_c14_pasta_nom);
    }

    if (p) {
      vp.ged_pasta_pai_id = p.paiId;
      vp.ged_pasta_processo_id = p.proId;
      if (t == 'c') vp.t1_c13_pasta_id = p.scfId;
      else vp.t6_c14_pasta_id = p.scfId;

      const pr = await this.processarDocsGED(vp, p.scfId);
      if (this.anexos_ged_temp.length == pr) {
        t == 'c' ? (vp.t1_c13_file_TS = []) : (vp.t6_c14_file_TS = []);
        this.anexos_ged_temp = [];
      }
    }

    return vp;
  };

  private prepararDocs = async (files: File[], anexos_arr: ged.Anexo[]) => {
    this.anexos_ged_temp = [];
    for (const [i, f] of files.entries()) {
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
    if (vp.t1_c13_pasta_id != '')
      vp.t1_c13_file_GED = (
        await ged.folderList(0, vp.token, vp.t1_c13_pasta_id)
      ).files.map<ged.Anexo>((d) => ({
        gedId: d.id,
        arquivoGED: d,
        enviado: true,
      }));
    if (vp.t6_c14_pasta_id != '')
      vp.t6_c14_file_GED = (
        await ged.folderList(0, vp.token, vp.t6_c14_pasta_id)
      ).files.map<ged.Anexo>((d) => ({
        gedId: d.id,
        arquivoGED: d,
        enviado: true,
      }));

    return vp;
  }

  public async cadastroService(vp: VP_BPM) {
    const d: LigProDep[] = [];
    vp.t1_c12_destino_sel = JSON.parse(vp.t1_c12_destino_stx);
    for (const i of vp.t1_c12_destino_sel) d.push({ codDep: i.codDep });

    const proObj: Produto = {
      codEmp: vp.c1_empresa_cod,

      /**
       * Dados básicos
       */
      desPro: vp.t1_descricao_prod,
      desNfv: vp.t1_descricao_fiscal,
      codClf: vp.t1_c3_clafiscal_cod,
      codFam: vp.t1_c5_familia_cod,
      codOri: vp.t1_c5_familia_ori,
      uniMed: vp.t1_c6_medida_cod,
      oriMer: vp.t1_c7_mercadoria_cod,
      ligProDep: d,
      altPro: vp.t1_altura,
      larPro: vp.t1_largura,
      comPro: vp.t1_comprimento,
      pesBru: vp.t1_peso_bruto,
      pesLiq: vp.t1_peso_liquido,

      /**
       * Dados fiscais e contábeis
       */
      proImp: vp.t6_c1_impostos_cod,
      regTri: vp.t6_c15_regi_trib_cod,
      temIcm: vp.t6_tem_icms,
      motDes: vp.t6_c13_motivo_cod,
      recIcm: vp.t6_recupera_icms,
      recPis: vp.t6_recupera_pis,
      recCof: vp.t6_recupera_cof,

      triPis: vp.t6_tributa_pis,
      triCof: vp.t6_tributa_cof,
      codStr: vp.t6_c16_situ_trib_cod,
      cstPis: vp.t6_c7_s_p_ven_cod,
      natPis: vp.t6_natureza_pis ?? 0,
      cstCof: vp.t6_c8_s_c_ven_cod,
      natCof: vp.t6_natureza_cof ?? 0,
      cstPic: vp.t6_c10_s_p_com_cod,
      cstCoc: vp.t6_c11_s_c_com_cod,
      cstIpc: vp.t6_c17_s_i_com_cod,

      indFpr: vp.t6_produ_forne,
      perFun: vp.t6_funrural,

      proEpe: vp.t6_c12_enqua_esp_cod,

      claPro: 1,
      tipPro: 'C',
      numOri: 55,
    };

    /**
     * Dados básicos
     */
    if (vp.t1_c1_marca_cod != '') proObj.codMar = vp.t1_c1_marca_cod;
    if (vp.t1_vendido != '') proObj.indVen = vp.t1_vendido;
    if (vp.t1_comprado != '') proObj.indCpr = vp.t1_comprado;
    if (vp.t1_c9_agrestoque_cod != '') proObj.codAge = vp.t1_c9_agrestoque_cod;

    /**
     * Dados da derivação
     */
    if (vp.t5_c1_mascara_cod != '') proObj.codMdp = vp.t5_c1_mascara_cod;
    if (
      vp.t5_c4_conversao2_cod != '' ||
      vp.t5_valor2 ||
      vp.t5_c5_conversao3_cod != '' ||
      vp.t5_valor3
    ) {
      proObj.derivacao = [{}];
      if (vp.t5_c4_conversao2_cod != '')
        proObj.derivacao[0].tipCn2 = vp.t5_c4_conversao2_cod;
      if (vp.t5_valor2) proObj.derivacao[0].vlrCn2 = vp.t5_valor2;
      if (vp.t5_c5_conversao3_cod != '')
        proObj.derivacao[0].tipCn3 = vp.t5_c5_conversao3_cod;
      if (vp.t5_valor3) proObj.derivacao[0].vlrCn3 = vp.t5_valor3;
    }
    if (vp.t5_c2_medida2_cod != '') proObj.uniMe2 = vp.t5_c2_medida2_cod;
    if (vp.t5_c3_medida3_cod != '') proObj.uniMe3 = vp.t5_c3_medida3_cod;

    /**
     * Dados fiscais e contábeis
     */
    if (vp.t6_c2_icms_espe_cod != '') proObj.codTic = vp.t6_c2_icms_espe_cod;
    if (vp.t6_c3_redu_icms_cod != '') proObj.codTrd = vp.t6_c3_redu_icms_cod;
    if (vp.t6_espe_subs_trib != '') proObj.codCes = vp.t6_espe_subs_trib;
    if (vp.t6_c4_icms_subs_cod != '') proObj.codTst = vp.t6_c4_icms_subs_cod;
    if (vp.t6_c5_cof_subs_cod != '') proObj.codStc = vp.t6_c5_cof_subs_cod;
    if (vp.t6_c6_pis_subs_cod != '') proObj.codStp = vp.t6_c6_pis_subs_cod;

    if (vp.t6_calc_icms != '') proObj.somIim = vp.t6_calc_icms;
    if (vp.t6_soma_icms != '') proObj.somIil = vp.t6_soma_icms;
    if (vp.t6_soma_pis != '') proObj.somIps = vp.t6_soma_pis;
    if (vp.t6_soma_pis_liq != '') proObj.somIpl = vp.t6_soma_pis_liq;
    if (vp.t6_soma_cof != '') proObj.somIco = vp.t6_soma_cof;
    if (vp.t6_soma_cof_liq != '') proObj.simIcl = vp.t6_soma_cof_liq;
    if (vp.t6_pis_dif) proObj.perPim = vp.t6_pis_dif;
    if (vp.t6_cof_dif) proObj.perCim = vp.t6_cof_dif;
    if (vp.t6_gilrat) proObj.perGil = vp.t6_gilrat;
    if (vp.t6_senart) proObj.perSen = vp.t6_senart;
    if (vp.t6_ipi) proObj.perIpi = vp.t6_ipi;
    if (vp.t6_diferimento) proObj.perDif = vp.t6_diferimento;
    if (vp.t6_c9_enqua_cod) proObj.codEnq = vp.t6_c9_enqua_cod;
    if (vp.t6_anp_cod) proObj.codAnp = vp.t6_anp_cod;
    if (vp.t6_anp_des != '') proObj.desAnp = vp.t6_anp_des;

    const p: Produto[] = [proObj];

    if (vp.t1_c14_duplicado_stx != '' && vp.t1_c14_duplicado_stx != '[]') {
      vp.t1_c14_duplicado_sel = JSON.parse(vp.t1_c14_duplicado_stx);
      for (const d of vp.t1_c14_duplicado_sel) {
        proObj.codEmp = d.codEmp;
        p.push(proObj);
      }
    }

    return await wsG5Exporta('CadastroProduto', JSON.stringify({ produto: p }));
  }
}

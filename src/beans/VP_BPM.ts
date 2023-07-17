import { Message, SelectItem } from 'primeng/api';
import { Anexo } from 'prisma_prismafunctions';
import * as wsb from './WS_Beans';

export interface ResponseLoadData {
  initial: number;
  tabs: number[];
  vp: VP_BPM;
}

export class VP_BPM {
  /**
   * Variáveis ​​Gerais
   */

  public overlay: boolean = true;
  public buscandoWS: boolean = false;

  public alertas: Message[] = [];

  public date_now: Date = new Date();
  public date_max: Date = new Date(8640000000000000);

  public token: string = '';
  public user_fullname: string = '';

  public key_filter: RegExp = /[a-zA-Z0-9./ ]/;

  public ged_pasta_pai_id: string = '';
  public ged_pasta_pai_nome: string = 'Cadastro de produto';

  public ged_pasta_processo_id: string = '';
  public ged_pasta_processo_nome: string = '';

  public check_options: SelectItem[] = [
    { label: 'Sim', value: 'Sim' },
    { label: 'Não', value: 'Não' },
  ];

  public unidades_arr: wsb.ExportaUniMeds[] = [];

  public c1_empresa_arr: wsb.ExportaEmpresas[] = [];
  public c1_empresa_rqd: boolean = false;
  public c1_empresa_obj?: wsb.ExportaEmpresas;
  public c1_empresa_cod: number = -1;
  public c1_empresa_nom: string = '';

  /**
   * Dados básicos
   */

  public t1_req_to_read: boolean = false;

  public t1_descricao_prod: string = '';

  public t1_complemento: string = '';

  public t1_descricao_fiscal: string = '';

  public t1_c1_marca_arr: wsb.ExportaMarcas[] = [];
  public t1_c1_marca_obj?: wsb.ExportaMarcas;
  public t1_c1_marca_cod: string = '';
  public t1_c1_marca_des: string = '';
  public t1_c1_marca_chk = () =>
    this.t1_c5_familia_cod == '1010' ||
    this.t1_c5_familia_cod == '2010' ||
    this.t1_c5_familia_cod == '2012';

  public t1_vendido: string = 'Sim';

  public t1_comprado: string = 'Sim';

  public t1_c2_substituto_cad: string = '';

  public t1_c2_substituto_arr: wsb.ExportaProdutos[] = [];
  public t1_c2_substituto_obj?: wsb.ExportaProdutos;
  public t1_c2_substituto_cod: string = '';

  public t1_cotado: string = '';

  public t1_controlado: string = '';

  public t1_c3_clafiscal_arr: wsb.ExportaClaFis[] = [];
  public t1_c3_clafiscal_obj?: wsb.ExportaClaFis;
  public t1_c3_clafiscal_cod: string = '';
  public t1_c3_clafiscal_des: string = '';

  /*public t1_barras: string = '';
  public t1_barras_just: string = '';
  public t1_barras_just_chk = () =>
    this.t1_barras == '' || this.t1_c5_familia_cod == 'SEM GTIN';*/

  public t1_valor_aprox?: number;

  public t1_c14_duplicado_arr: wsb.ExportaEmpresas[] = [];
  public t1_c14_duplicado_sel: wsb.ExportaEmpresas[] = [];
  public t1_c14_duplicado_stx: string = '';
  public t1_c14_duplicado_nom: string = '';

  public t1_c5_familia_arr: wsb.ExportaFamilias[] = [];
  public t1_c5_familia_obj?: wsb.ExportaFamilias;
  public t1_c5_familia_cod: string = '';
  public t1_c5_familia_des: string = '';

  public t1_c6_medida_obj?: wsb.ExportaUniMeds;
  public t1_c6_medida_cod: string = '';
  public t1_c6_medida_des: string = '';

  public t1_c7_mercadoria_arr: wsb.ExportaValorLista[] = [];
  public t1_c7_mercadoria_obj?: wsb.ExportaValorLista;
  public t1_c7_mercadoria_cod: string = '';
  public t1_c7_mercadoria_des: string = '';

  public t1_c9_agrestoque_arr: wsb.ExportaAgrupamentos[] = [];
  public t1_c9_agrestoque_obj?: wsb.ExportaAgrupamentos;
  public t1_c9_agrestoque_cod: string = '';
  public t1_c9_agrestoque_des: string = '';

  public t1_c12_destino_arr: wsb.ExportaDepositos[] = [];
  public t1_c12_destino_sel: wsb.ExportaDepositos[] = [];
  public t1_c12_destino_stx: string = '';
  public t1_c12_destino_cod: string = '';
  //public t1_c12_destino_des: string = '';

  public t1_aplicacao: string = '';

  public t1_comp_trata: string = '';

  public medida_options: SelectItem[] = [
    { label: 'mm.', value: 'mm' },
    { label: 'pol.', value: 'pol' },
  ];
  //public t1_tipo_arr: string[] = ['mm.', 'pol.'];

  public t1_altura?: number;
  public t1_altura_tipo: string = '';

  public t1_largura?: number;
  public t1_largura_tipo: string = '';

  public t1_comprimento?: number;
  public t1_comprimento_tipo: string = '';

  public t1_peso_bruto?: number;

  public t1_peso_liquido?: number;

  public t1_c13_file_TS: File[] = [];
  public t1_c13_file_GED: Anexo[] = [];
  public t1_c13_pasta_id: string = '';
  public t1_c13_pasta_nom: string = 'Anexo cadastro';

  /**
   * Dados da derivação
   */

  public t5_req_to_read: boolean = false;

  public t5_conversao_arr: wsb.ExportaValorLista[] = [];

  //public t5_descricao: string = '';

  public t5_c1_mascara_arr: wsb.ExportaMascaraDerivacao[] = [];
  public t5_c1_mascara_obj?: wsb.ExportaMascaraDerivacao;
  public t5_c1_mascara_cod: string = '';
  public t5_c1_mascara_des: string = '';

  public t5_c2_medida2_obj?: wsb.ExportaUniMeds;
  public t5_c2_medida2_cod: string = '';
  public t5_c2_medida2_des: string = '';

  public t5_c3_medida3_obj?: wsb.ExportaUniMeds;
  public t5_c3_medida3_cod: string = '';
  public t5_c3_medida3_des: string = '';

  public t5_c4_conversao2_obj?: wsb.ExportaValorLista;
  public t5_c4_conversao2_cod: string = '';
  public t5_c4_conversao2_des: string = '';

  public t5_valor2?: number;

  public t5_c5_conversao3_obj?: wsb.ExportaValorLista;
  public t5_c5_conversao3_cod: string = '';
  public t5_c5_conversao3_des: string = '';

  public t5_valor3?: number;

  public t5_observacao: string = '';

  public t5_show_only_recusa: boolean = false;
  public t5_recusa: string = '';

  /**
   * Dados fiscais e contábeis
   */

  public t6_req_to_read: boolean = false;

  public t6_c1_impostos_arr: wsb.ExportaValorLista[] = [];
  public t6_c1_impostos_obj?: wsb.ExportaValorLista;
  public t6_c1_impostos_cod: number = -1;
  public t6_c1_impostos_des: string = '';

  public t6_c2_icms_espe_arr: wsb.ExportaICMSEsp[] = [];
  public t6_c2_icms_espe_obj?: wsb.ExportaICMSEsp;
  public t6_c2_icms_espe_cod: string = '';

  public t6_c3_redu_icms_arr: wsb.ExportaReducaoICMS[] = [];
  public t6_c3_redu_icms_obj?: wsb.ExportaReducaoICMS;
  public t6_c3_redu_icms_cod: string = '';

  public t6_substituicao_arr: wsb.ExportaSubstituicao[] = [];

  public t6_c4_icms_subs_obj?: wsb.ExportaSubstituicao;
  public t6_c4_icms_subs_cod: string = '';

  public t6_c5_cof_subs_obj?: wsb.ExportaSubstituicao;
  public t6_c5_cof_subs_cod: string = '';

  public t6_c6_pis_subs_obj?: wsb.ExportaSubstituicao;
  public t6_c6_pis_subs_cod: string = '';

  public t6_recupera_pis: string = '';

  public t6_recupera_cof: string = '';

  public t6_tributa_pis: string = '';

  public t6_tributa_cof: string = '';

  public t6_situacao_arr: wsb.ExportaValorLista[] = [];

  public t6_c7_s_p_ven_obj?: wsb.ExportaValorLista;
  public t6_c7_s_p_ven_cod: string = '';
  public t6_c7_s_p_ven_des: string = '';

  public t6_natureza_pis?: number;

  public t6_c8_s_c_ven_obj?: wsb.ExportaValorLista;
  public t6_c8_s_c_ven_cod: string = '';
  public t6_c8_s_c_ven_des: string = '';

  public t6_natureza_cof?: number;

  public t6_c9_enqua_arr: wsb.ExportaEnquadramento[] = [];
  public t6_c9_enqua_obj?: wsb.ExportaEnquadramento;
  public t6_c9_enqua_cod?: number;

  public t6_c10_s_p_com_obj?: wsb.ExportaValorLista;
  public t6_c10_s_p_com_cod: string = '';
  public t6_c10_s_p_com_des: string = '';

  public t6_c11_s_c_com_obj?: wsb.ExportaValorLista;
  public t6_c11_s_c_com_cod: string = '';
  public t6_c11_s_c_com_des: string = '';

  public t6_produ_forne: string = '';

  public t6_funrural?: number;

  public t6_gilrat?: number;

  public t6_senart?: number;

  public t6_c12_enqua_esp_arr: wsb.ExportaValorLista[] = [];
  public t6_c12_enqua_esp_obj?: wsb.ExportaValorLista;
  public t6_c12_enqua_esp_cod: number = -1;
  public t6_c12_enqua_esp_des: string = '';

  public t6_c13_motivo_arr: wsb.ExportaValorLista[] = [];
  public t6_c13_motivo_obj?: wsb.ExportaValorLista;
  public t6_c13_motivo_cod: number = 0;
  public t6_c13_motivo_des: string = 'Nenhum';

  public t6_espe_subs_trub: string = '';

  public t6_anp_cod?: number;
  public t6_anp_des: string = '';

  public t6_pauta: string = '';

  public t6_benef: string = '';

  public t6_observacoes: string = '';

  public t6_recusa_show_only: boolean = false;
  public t6_recusa: string = '';

  public t6_c14_file_TS: File[] = [];
  public t6_c14_file_GED: Anexo[] = [];
  public t6_c14_pasta_id: string = '';
  public t6_c14_pasta_nom: string = 'Anexo cadastro';

  /**
   * Resposta do ws cadastro
   */

  public c7_cadastro_show: boolean = false;

  public c7_codigo_produto: string = '';
  public c7_mensagem_retorno: string = '';
}

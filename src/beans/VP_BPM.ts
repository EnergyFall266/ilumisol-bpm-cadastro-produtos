import { Message, SelectItem } from 'primeng/api';
import { Anexo } from 'prisma_prismafunctions';
import * as wsb from './WS_Beans';

export interface ResponseLoadData {
  initial: number;
  tabs: number[];
  vp: VP_BPM;
}

export class VP_BPM {
  //Variáveis ​​Gerais
  public overlay: boolean = true;

  public alertas: Message[] = [];

  public date_now: Date = new Date();
  public date_max: Date = new Date(8640000000000000);

  public token: string = '';
  public user_fullname: string = '';

  public ged_pasta_pai_id: string = '';
  public ged_pasta_pai_nome: string = 'Cadastro de produto';

  public check_options: SelectItem[] = [
    { label: 'Sim', value: 'Sim' },
    { label: 'Não', value: 'Não' },
  ];

  public unidades_medida_arr: wsb.ExportaUniMeds[] = [];

  /**
   * Dados básicos
   */

  public t1_mandatory_to_readonly: boolean = false;

  //Coluna 1
  public t1_c1_segmento_options: SelectItem[] = [
    { label: 'Lojas Agro', value: 'Lojas Agro' },
    { label: 'Varejo', value: 'Varejo' },
    { label: 'Industrial e Consumo', value: 'Industrial e Consumo' },
    { label: 'Imobilizado', value: 'Imobilizado' },
  ];
  public t1_c1_segmento: string = '';

  public t1_c1_item_arr: wsb.ExportaProdutos[] = [];

  public t1_c1_c1_substituto_cad: string = '';

  public t1_c1_c1_item_subs_obj?: wsb.ExportaProdutos;
  public t1_c1_c1_item_subs_cod: string = '';

  public t1_c1_c2_similar_exi: string = '';

  public t1_c1_c2_item_simi_obj?: wsb.ExportaProdutos;
  public t1_c1_c2_item_simi_cod: string = '';

  public t1_c1_c3_origem_arr: wsb.ExportaOrigens[] = [];
  public t1_c1_c3_origem_obj?: wsb.ExportaOrigens;
  public t1_c1_c3_origem_cod: string = '';
  public t1_c1_c3_origem_des: string = '';

  public t1_c1_c4_familia_arr: wsb.ExportaFamilias[] = [];
  public t1_c1_c4_familia_obj?: wsb.ExportaFamilias;
  public t1_c1_c4_familia_cod: string = '';
  public t1_c1_c4_familia_des: string = '';

  public t1_c1_descricao: string = '';

  public t1_c1_c5_medida_obj?: wsb.ExportaUniMeds;
  public t1_c1_c5_medida_cod: string = '';
  public t1_c1_c5_medida_des: string = '';

  public t1_c1_cotado: string = '';

  //Coluna 2
  public t1_c2_c1_marca_arr: wsb.ExportaMarcas[] = [];
  public t1_c2_c1_marca_obj?: wsb.ExportaMarcas;
  public t1_c2_c1_marca_cod: string = '';
  public t1_c2_c1_marca_des: string = '';

  public t1_c2_c2_clafiscal_arr: wsb.ExportaClaFis[] = [];
  public t1_c2_c2_clafiscal_obj?: wsb.ExportaClaFis;
  public t1_c2_c2_clafiscal_cod: string = '';
  public t1_c2_c2_clafiscal_des: string = '';

  public t1_c2_c3_barras: string = '';

  public t1_c2_c3_barras_justificativa: string = '';

  public t1_c2_c4_agrupamento_arr: wsb.ExportaAgrupamentos[] = [];
  public t1_c2_c4_agrupamento_obj?: wsb.ExportaAgrupamentos;
  public t1_c2_c4_agrupamento_cod: string = '';
  public t1_c2_c4_agrupamento_des: string = '';

  public t1_c2_especificacao: string = '';

  public t1_c2_c5_mercadoria_arr: wsb.ExportaValorLista[] = [];
  public t1_c2_c5_mercadoria_obj?: wsb.ExportaValorLista;
  public t1_c2_c5_mercadoria_cod: string = '';
  public t1_c2_c5_mercadoria_des: string = '';

  public t1_c2_c6_integra_agrosys: string = '';

  public t1_c2_c6_agrosys_arr: wsb.ExportaProAgs[] = [];
  public t1_c2_c6_agrosys_obj?: wsb.ExportaProAgs;
  public t1_c2_c6_agrosys_cod: string = '';

  public t1_c2_c7_multinivel_arr: wsb.ExportaAgrupamentos[] = [];
  public t1_c2_c7_multinivel_obj?: wsb.ExportaAgrupamentos;
  public t1_c2_c7_multinivel_cod: string = '';

  //Coluna 3
  public t1_c3_c1_requisitado: string = 'Não';

  public t1_c3_c1_vendido: string = 'Sim';

  public t1_c3_c1_comprado: string = 'Sim';

  public t1_c3_c1_orcamento: string = 'Não';

  public t1_c3_vendido_upl: string = '';

  public t1_c3_receita: string = '';

  public t1_c3_c2_venda_virtual: string = '';

  public t1_c3_c2_categoria_arr: wsb.ExportaCategorias[] = [];
  public t1_c3_c2_categoria_obj?: wsb.ExportaCategorias;
  public t1_c3_c2_categoria_cod: number = -1;
  public t1_c3_c2_categoria_des: string = '';

  public t1_c3_c2_subcategoria_arr: wsb.ExportaSubCategorias[] = [];
  public t1_c3_c2_subcategoria_obj?: wsb.ExportaSubCategorias;
  public t1_c3_c2_subcategoria_cod: number = -1;
  public t1_c3_c2_subcategoria_des: string = '';

  public t1_c3_numero_onu: string = '';

  //Coluna 4
  public t1_c4_classe_toxicologica: string = '';

  public t1_c4_classe_risco: string = '';

  public t1_c4_numero_risco: string = '';

  public t1_c4_numero_mapa: string = '';

  public t1_c4_quimico_arr: wsb.ExportaGrupoQuimico[] = [];
  public t1_c4_quimico_obj?: wsb.ExportaGrupoQuimico;
  public t1_c4_quimico_cod: number = -1;
  public t1_c4_quimico_des: string = '';

  /**
   * Dados de fornecedor
   */

  public t2_mandatory_to_readonly: boolean = false;

  public t2_fornecedor_arr: wsb.ExportaFornecedores[] = [];
  public t2_fornecedor_obj?: wsb.ExportaFornecedores;
  public t2_fornecedor_cod: number = -1;
  public t2_fornecedor_des: string = '';

  public t2_quantidade_multipla?: number;

  public t2_quantidade_maxima?: number;

  public t2_quantidade_minima?: number;

  public t2_codigo_produto: string = '';

  /**
   * Dados de depósito
   */

  public t3_mandatory_to_readonly: boolean = false;

  //Coluna 1
  public t3_c1_destino_arr: wsb.ExportaDepositos[] = [];
  public t3_c1_destino_obj?: wsb.ExportaDepositos;
  public t3_c1_destino_cod: string = '';
  public t3_c1_destino_des: string = '';

  public t3_c1_quan_estoque_rep?: number;

  public t3_c1_quan_min_vendas?: number;

  //Coluna 2
  public t3_c2_quan_estoque_min?: number;

  public t3_c2_quan_estoque_max?: number;

  public t3_c2_quan_max_vendas?: number;

  //Coluna 3
  public t3_c3_estoque_min?: number;

  public t3_c3_estoque_max?: number;

  //Coluna 4
  public t3_c4_quan_mul_ven?: number;

  public t3_c4_quan_mul_com?: number;

  /**
   * Observações e Anexos
   */

  public t4_mandatory_to_readonly: boolean = false;

  public t4_observacoes: string = '';

  public t4_anexo_files: File[] = [];
  public t4_anexo_ged_arr: Anexo[] = [];
  public t4_anexo_pasta_id: string = '';
  public t4_anexo_pasta_nome: string = 'Anexo solicitação';

  /**
   * Dados do cadastro
   */

  public t5_mandatory_to_readonly: boolean = false;

  public t5_show_only_recusa: boolean = false;

  //Coluna 1
  public t5_c1_descricao: string = '';

  public t5_c1_c1_mascara_arr: wsb.ExportaMascaraDerivacao[] = [];
  public t5_c1_c1_mascara_obj?: wsb.ExportaMascaraDerivacao;
  public t5_c1_c1_mascara_cod: string = '';
  public t5_c1_c1_mascara_des: string = '';

  public t5_c1_c2_agr_est_arr: wsb.ExportaAgrupamentos[] = [];
  public t5_c1_c2_agr_est_obj?: wsb.ExportaAgrupamentos;
  public t5_c1_c2_agr_est_cod: string = '';
  public t5_c1_c2_agr_est_des: string = '';

  public t5_c1_c2_agr_cus_arr: wsb.ExportaAgrupamentos[] = [];
  public t5_c1_c2_agr_cus_obj?: wsb.ExportaAgrupamentos;
  public t5_c1_c2_agr_cus_cod: string = '';
  public t5_c1_c2_agr_cus_des: string = '';

  //Coluna 2
  public t5_c2_c1_med_2_obj?: wsb.ExportaUniMeds;
  public t5_c2_c1_med_2_cod: string = '';
  public t5_c2_c1_med_2_des: string = '';

  public t5_c2_c1_med_3_obj?: wsb.ExportaUniMeds;
  public t5_c2_c1_med_3_cod: string = '';
  public t5_c2_c1_med_3_des: string = '';

  public t5_c2_tipo_conversao_arr: wsb.ExportaValorLista[] = [];

  public t5_c2_c2_med_2_tip_obj?: wsb.ExportaValorLista;
  public t5_c2_c2_med_2_tip_cod: string = '';
  public t5_c2_c2_med_2_tip_des: string = '';

  public t5_c2_c2_med_2_val?: number;

  public t5_c2_c3_med_3_tip_obj?: wsb.ExportaValorLista;
  public t5_c2_c3_med_3_tip_cod: string = '';
  public t5_c2_c3_med_3_tip_des: string = '';

  public t5_c2_c3_med_3_val?: number;

  //Coluna 3
  public t5_c3_c1_peso_bruto?: number;

  public t5_c3_c1_peso_liquido?: number;

  public t5_c3_observacao: string = '';

  public t5_c3_c2_anexo_files: File[] = [];
  public t5_c3_c2_anexo_ged_arr: Anexo[] = [];
  public t5_c3_c2_anexo_pasta_id: string = '';
  public t5_c3_c2_anexo_pasta_nome: string = 'Anexo cadastro';

  //Coluna 4
  public t5_c4_recusa: string = '';

  /**
   * Dados fiscais e contábeis
   */

  public t6_mandatory_to_readonly: boolean = false;

  public t6_show_only_recusa: boolean = false;

  //Coluna 1
  public t6_c1_c1_tipo_prod_arr: wsb.ExportaValorLista[] = [];
  public t6_c1_c1_tipo_prod_obj?: wsb.ExportaValorLista;
  public t6_c1_c1_tipo_prod_cod: string = '';
  public t6_c1_c1_tipo_prod_des: string = '';

  public t6_c1_c2_icms_especial_arr: wsb.ExportaICMSEsp[] = [];
  public t6_c1_c2_icms_especial_obj?: wsb.ExportaICMSEsp;
  public t6_c1_c2_icms_especial_cod: string = '';

  public t6_c1_c2_reducao_icms_arr: wsb.ExportaReducaoICMS[] = [];
  public t6_c1_c2_reducao_icms_obj?: wsb.ExportaReducaoICMS;
  public t6_c1_c2_reducao_icms_cod: string = '';

  public t6_c1_substituicao_arr: wsb.ExportaSubstituicao[] = [];

  public t6_c1_c2_icms_substituido_obj?: wsb.ExportaSubstituicao;
  public t6_c1_c2_icms_substituido_cod: string = '';

  public t6_c1_c3_cof_subs_obj?: wsb.ExportaSubstituicao;
  public t6_c1_c3_cof_subs_cod: string = '';

  public t6_c1_c3_pis_subs_obj?: wsb.ExportaSubstituicao;
  public t6_c1_c3_pis_subs_cod: string = '';

  public t6_c1_pis_recu: string = '';

  public t6_c1_cof_recu: string = '';

  public t6_c1_pis_trib: string = '';

  public t6_c1_cof_trib: string = '';

  //Coluna 2
  public t6_c2_sit_tri_arr: wsb.ExportaValorLista[] = [];

  public t6_c2_c1_pis_ven_obj?: wsb.ExportaValorLista;
  public t6_c2_c1_pis_ven_cod: string = '';
  public t6_c2_c1_pis_ven_des: string = '';

  public t6_c2_c1_pis_nat_cod: string = '';

  public t6_c2_c2_cof_ven_obj?: wsb.ExportaValorLista;
  public t6_c2_c2_cof_ven_cod: string = '';
  public t6_c2_c2_cof_ven_des: string = '';

  public t6_c2_c2_cof_nat_cod: string = '';

  public t6_c2_c3_enqua_arr: wsb.ExportaEnquadramento[] = [];
  public t6_c2_c3_enqua_obj?: wsb.ExportaEnquadramento;
  public t6_c2_c3_enqua_cod?: number;

  public t6_c2_c4_pis_com_obj?: wsb.ExportaValorLista;
  public t6_c2_c4_pis_com_cod: string = '';
  public t6_c2_c4_pis_com_des: string = '';

  public t6_c2_c4_cof_com_obj?: wsb.ExportaValorLista;
  public t6_c2_c4_cof_com_cod: string = '';
  public t6_c2_c4_cof_com_des: string = '';

  public t6_c2_usa_pro_for: string = '';

  public t6_c2_funrural?: number;

  public t6_c2_gilrat?: number;

  //Coluna 3
  public t6_c3_senart?: number;

  public t6_c3_c1_enq_esp_arr: wsb.ExportaValorLista[] = [];
  public t6_c3_c1_enq_esp_obj?: wsb.ExportaValorLista;
  public t6_c3_c1_enq_esp_cod: string = '';
  public t6_c3_c1_enq_esp_des: string = '';

  public t6_c3_c2_motivo_arr: wsb.ExportaValorLista[] = [];
  public t6_c3_c2_motivo_obj?: wsb.ExportaValorLista;
  public t6_c3_c2_motivo_cod: string = '';
  public t6_c3_c2_motivo_des: string = '';

  public t6_c3_substituicao: string = '';

  public t6_c3_c3_anp_cod?: number;

  public t6_c3_c3_anp_des: string = '';

  public t6_c3_cal_fun: string = '';

  public t6_c3_cal_sen: string = '';

  public t6_c3_c4_pauta: string = '';

  public t6_c3_c5_benef: string = '';

  //Coluna 4
  public t6_c4_c1_observacoes: string = '';

  public t6_c4_c1_recusa: string = '';

  public t6_c4_c2_anexo_files: File[] = [];
  public t6_c4_c2_anexo_ged_arr: Anexo[] = [];
  public t6_c4_c2_anexo_pasta_id: string = '';
  public t6_c4_c2_anexo_pasta_nome: string = 'Anexo fiscal/cotábil';
}

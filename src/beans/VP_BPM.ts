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
  public user_fullName: string = '';

  public ged_pasta_pai_id: string = '';
  public ged_pasta_pai_nome: string = 'Cadastro de produto';

  public check_options: SelectItem[] = [
    { label: 'Sim', value: 'Sim' },
    { label: 'Não', value: 'Não' },
  ];

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

  public t1_c1_substituto_cadastrado: string = '';

  public t1_c1_item_substituido_arr: wsb.Item[] = [];
  public t1_c1_item_substituido_obj?: wsb.Item;
  public t1_c1_item_substituido_cod: string = '';

  public t1_c1_similar_existe: string = '';

  public t1_c1_item_similar_arr: wsb.Item[] = [];
  public t1_c1_item_similar_obj?: wsb.Item;
  public t1_c1_item_similar_cod: string = '';

  public t1_c1_origem_arr: wsb.Origem[] = [];
  public t1_c1_origem_obj?: wsb.Origem;
  public t1_c1_origem_cod: string = '';
  public t1_c1_origem_des: string = '';

  public t1_c1_familia_arr: wsb.Familia[] = [];
  public t1_c1_familia_obj?: wsb.Familia;
  public t1_c1_familia_cod: string = '';
  public t1_c1_familia_des: string = '';

  public t1_c1_descricao: string = '';

  public t1_c1_medida_arr: wsb.UnidadeMedida[] = [];
  public t1_c1_medida_obj?: wsb.UnidadeMedida;
  public t1_c1_medida_cod: string = '';
  public t1_c1_medida_des: string = '';

  public t1_c1_cotado: string = '';

  //Coluna 2
  public t1_c2_marca_arr: wsb.Marca[] = [];
  public t1_c2_marca_obj?: wsb.Marca;
  public t1_c2_marca_cod: string = '';
  public t1_c2_marca_des: string = '';

  public t1_c2_clafiscal_arr: wsb.ClassificacaoFiscal[] = [];
  public t1_c2_clafiscal_obj?: wsb.ClassificacaoFiscal;
  public t1_c2_clafiscal_cod: string = '';
  public t1_c2_clafiscal_des: string = '';

  public t1_c2_barras: string = '';

  public t1_c2_barras_justificativa: string = '';

  public t1_c2_agrupamento_arr: wsb.AgrupamentoComercial[] = [];
  public t1_c2_agrupamento_obj?: wsb.AgrupamentoComercial;
  public t1_c2_agrupamento_cod: string = '';
  public t1_c2_agrupamento_des: string = '';

  public t1_c2_especificacao: string = '';

  public t1_c2_mercadoria_arr: wsb.OrigemFiscalMercadoria[] = [];
  public t1_c2_mercadoria_obj?: wsb.OrigemFiscalMercadoria;
  public t1_c2_mercadoria_cod: string = '';
  public t1_c2_mercadoria_des: string = '';

  public t1_c2_integra_agrosys: string = '';

  public t1_c2_agrosys_arr: wsb.Agrosys[] = [];
  public t1_c2_agrosys_obj?: wsb.Agrosys;
  public t1_c2_agrosys_cod: string = '';

  public t1_c2_multinivel_arr: wsb.AgrAprMultinivel[] = [];
  public t1_c2_multinivel_obj?: wsb.AgrAprMultinivel;
  public t1_c2_multinivel_cod: string = '';

  //Coluna 3
  public t1_c3_requisitado: string = 'NÃO';

  public t1_c3_vendido: string = 'SIM';

  public t1_c3_comprado: string = 'SIM';

  public t1_c3_orcamento: string = 'NÃO';

  public t1_c3_vendido_upl: string = '';

  public t1_c3_receita: string = '';

  public t1_c3_venda_virtual: string = '';

  public t1_c3_categoria_arr: wsb.CategoriaVenda[] = [];
  public t1_c3_categoria_obj?: wsb.CategoriaVenda;
  public t1_c3_categoria_cod: string = '';
  public t1_c3_categoria_des: string = '';

  public t1_c3_subcategoria_arr: wsb.CategoriaVenda[] = [];
  public t1_c3_subcategoria_obj?: wsb.CategoriaVenda;
  public t1_c3_subcategoria_cod: string = '';
  public t1_c3_subcategoria_des: string = '';

  public t1_c3_numero_onu: string = '';

  //Coluna 4
  public t1_c4_classe_toxicologica: string = '';

  public t1_c4_classe_risco: string = '';

  public t1_c4_numero_risco: string = '';

  public t1_c4_numero_mapa: string = '';

  public t1_c4_quimico_arr: wsb.GrupoQuimico[] = [];
  public t1_c4_quimico_obj?: wsb.GrupoQuimico;
  public t1_c4_quimico_cod: string = '';
  public t1_c4_quimico_des: string = '';

  /**
   * Dados de fornecedor
   */

  public t2_mandatory_to_readonly: boolean = true;

  public t2_fornecedor_arr: wsb.Fornecedor[] = [];
  public t2_fornecedor_obj?: wsb.Fornecedor;
  public t2_fornecedor_cod: string = '';
  public t2_fornecedor_des: string = '';

  public t2_quantidade_multipla?: number;

  public t2_quantidade_maxima?: number;

  public t2_quantidade_minima?: number;

  public t2_codigo_produto: string = '';

  /**
   * Dados de depósito
   */

  public t3_mandatory_to_readonly: boolean = true;

  //Coluna 1
  public t3_c1_destino_arr: wsb.Deposito[] = [];
  public t3_c1_destino_obj?: wsb.Deposito;
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

  public t4_mandatory_to_readonly: boolean = true;

  public t4_observacoes: string = '';

  public t4_anexo_files: File[] = [];
  public t4_anexo_ged_arr: Anexo[] = [];
  public t4_anexo_pasta_id: string = '';
  public t4_anexo_pasta_nome: string = 'Anexo solicitação';

  /**
   * Dados do cadastro
   */

  public t5_mandatory_to_readonly: boolean = false;

  //Coluna 1
  public t5_c1_descricao: string = '';

  public t5_c1_c1_mascara_arr: wsb.MascaraDerivacao[] = [];
  public t5_c1_c1_mascara_obj?: wsb.MascaraDerivacao;
  public t5_c1_c1_mascara_cod: string = '';
  public t5_c1_c1_mascara_des: string = '';

  public t5_c1_c2_agr_est_arr: wsb.AgrupEstoques[] = [];
  public t5_c1_c2_agr_est_obj?: wsb.AgrupEstoques;
  public t5_c1_c2_agr_est_cod: string = '';
  public t5_c1_c2_agr_est_des: string = '';

  public t5_c1_c2_agr_cus_arr: wsb.AgrupCustos[] = [];
  public t5_c1_c2_agr_cus_obj?: wsb.AgrupCustos;
  public t5_c1_c2_agr_cus_cod: string = '';
  public t5_c1_c2_agr_cus_des: string = '';

  //Coluna 2
  public t5_c2_c1_med_2_arr: wsb.UnidadeMedida[] = [];
  public t5_c2_c1_med_2_obj?: wsb.UnidadeMedida;
  public t5_c2_c1_med_2_cod: string = '';
  public t5_c2_c1_med_2_des: string = '';

  public t5_c2_c1_med_3_arr: wsb.UnidadeMedida[] = [];
  public t5_c2_c1_med_3_obj?: wsb.UnidadeMedida;
  public t5_c2_c1_med_3_cod: string = '';
  public t5_c2_c1_med_3_des: string = '';

  public t5_c2_c2_med_2_tip_arr: wsb.TipoConversao[] = [];
  public t5_c2_c2_med_2_tip_obj?: wsb.TipoConversao;
  public t5_c2_c2_med_2_tip_cod: string = '';
  public t5_c2_c2_med_2_tip_des: string = '';

  public t5_c2_c2_med_2_val?: number;

  public t5_c2_c3_med_3_tip_arr: wsb.TipoConversao[] = [];
  public t5_c2_c3_med_3_tip_obj?: wsb.TipoConversao;
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

  public t6_mandatory_to_readonly: boolean = true;

  //Coluna 1
  public t6_c1_c1_tipo_prod_arr: wsb.TipoProduto[] = [];
  public t6_c1_c1_tipo_prod_obj?: wsb.TipoProduto;
  public t6_c1_c1_tipo_prod_cod: string = '';
  public t6_c1_c1_tipo_prod_des: string = '';

  public t6_c1_c2_icms_especial_arr: wsb.ICMS[] = [];
  public t6_c1_c2_icms_especial_obj?: wsb.ICMS;
  public t6_c1_c2_icms_especial_cod: string = '';

  public t6_c1_c2_reducao_icms_arr: wsb.ICMS[] = [];
  public t6_c1_c2_reducao_icms_obj?: wsb.ICMS;
  public t6_c1_c2_reducao_icms_cod: string = '';

  public t6_c1_c2_icms_substituido_arr: wsb.ICMS[] = [];
  public t6_c1_c2_icms_substituido_obj?: wsb.ICMS;
  public t6_c1_c2_icms_substituido_cod: string = '';

  public t6_c1_c3_cof_subs_arr: wsb.Cofins[] = [];
  public t6_c1_c3_cof_subs_obj?: wsb.Cofins;
  public t6_c1_c3_cof_subs_cod: string = '';

  public t6_c1_c3_pis_subs_arr: wsb.Pis[] = [];
  public t6_c1_c3_pis_subs_obj?: wsb.Pis;
  public t6_c1_c3_pis_subs_cod: string = '';

  public t6_c1_pis_recu: string = '';

  public t6_c1_cof_recu: string = '';

  public t6_c1_pis_trib: string = '';

  public t6_c1_cof_trib: string = '';

  //Coluna 2
  public t6_c2_c1_pis_ven_arr: wsb.SituacaoTributaria[] = [];
  public t6_c2_c1_pis_ven_obj?: wsb.SituacaoTributaria;
  public t6_c2_c1_pis_ven_cod: string = '';
  public t6_c2_c1_pis_ven_des: string = '';

  public t6_c2_c1_pis_nat_arr: wsb.NaturezaReceita[] = [];
  public t6_c2_c1_pis_nat_obj?: wsb.NaturezaReceita;
  public t6_c2_c1_pis_nat_cod: string = '';
  public t6_c2_c1_pis_nat_des: string = '';

  public t6_c2_c2_cof_ven_arr: wsb.SituacaoTributaria[] = [];
  public t6_c2_c2_cof_ven_obj?: wsb.SituacaoTributaria;
  public t6_c2_c2_cof_ven_cod: string = '';
  public t6_c2_c2_cof_ven_des: string = '';

  public t6_c2_c2_cof_nat_arr: wsb.NaturezaReceita[] = [];
  public t6_c2_c2_cof_nat_obj?: wsb.NaturezaReceita;
  public t6_c2_c2_cof_nat_cod: string = '';
  public t6_c2_c2_cof_nat_des: string = '';

  public t6_c2_c3_enqua_arr: wsb.Enquadramento[] = [];
  public t6_c2_c3_enqua_obj?: wsb.Enquadramento;
  public t6_c2_c3_enqua_cod: string = '';

  public t6_c2_c4_pis_com_arr: wsb.SituacaoTributaria[] = [];
  public t6_c2_c4_pis_com_obj?: wsb.SituacaoTributaria;
  public t6_c2_c4_pis_com_cod: string = '';
  public t6_c2_c4_pis_com_des: string = '';

  public t6_c2_c4_cof_com_arr: wsb.SituacaoTributaria[] = [];
  public t6_c2_c4_cof_com_obj?: wsb.SituacaoTributaria;
  public t6_c2_c4_cof_com_cod: string = '';
  public t6_c2_c4_cof_com_des: string = '';

  public t6_c2_usa_pro_for: string = '';

  public t6_c2_funrural?: number;

  public t6_c2_gilrat?: number;

  //Coluna 3
  public t6_c3_senart?: number;

  public t6_c3_c1_enq_esp_arr: wsb.Enquadramento[] = [];
  public t6_c3_c1_enq_esp_obj?: wsb.Enquadramento;
  public t6_c3_c1_enq_esp_cod: string = '';
  public t6_c3_c1_enq_esp_des: string = '';

  public t6_c3_c2_motivo_arr: wsb.Desoneracao[] = [];
  public t6_c3_c2_motivo_obj?: wsb.Desoneracao;
  public t6_c3_c2_motivo_cod: string = '';
  public t6_c3_c2_motivo_des: string = '';

  public t6_c3_substituicao: string = '';

  public t6_c3_c3_anp_cod?: number;

  public t6_c3_c3_anp_des: string = '';

  public t6_c3_cal_fun: string = '';

  public t6_c3_cal_sen: string = '';

  public t6_c3_c4_pauta_arr: wsb.PautaFiscal[] = [];
  public t6_c3_c4_pauta_obj?: wsb.PautaFiscal;
  public t6_c3_c4_pauta_cod: string = '';
  public t6_c3_c4_pauta_des: string = '';

  public t6_c3_c5_benef_arr: wsb.CBenef[] = [];
  public t6_c3_c5_benef_obj?: wsb.CBenef;
  public t6_c3_c5_benef_cod: string = '';
  public t6_c3_c5_benef_des: string = '';

  //Coluna 4
  public t6_c4_c1_observacoes: string = '';

  public t6_c4_c1_recusa: string = '';

  public t6_c4_c2_anexo_files: File[] = [];
  public t6_c4_c2_anexo_ged_arr: Anexo[] = [];
  public t6_c4_c2_anexo_pasta_id: string = '';
  public t6_c4_c2_anexo_pasta_nome: string = 'Anexo fiscal/cotábil';
}

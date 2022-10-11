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

  public t1_c1_substituto_cadastrado_chk: boolean = false;
  public t1_c1_substituto_cadastrado_txt: string = '';

  public t1_c1_item_substituido_arr: wsb.Item[] = [];
  public t1_c1_item_substituido_obj?: wsb.Item;
  public t1_c1_item_substituido_cod: string = '';

  public t1_c1_similar_existe_chk: boolean = false;
  public t1_c1_similar_existe_txt: string = '';

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

  public t1_c1_cotado_chk: boolean = false;
  public t1_c1_cotado_txt: string = '';

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

  public t1_c2_integra_agrosys_chk: boolean = false;
  public t1_c2_integra_agrosys_txt: string = '';

  public t1_c2_agrosys_arr: wsb.Agrosys[] = [];
  public t1_c2_agrosys_obj?: wsb.Agrosys;
  public t1_c2_agrosys_cod: string = '';
  public t1_c2_agrosys_des: string = '';

  public t1_c2_multinivel_arr: wsb.AgrAprMultinivel[] = [];
  public t1_c2_multinivel_obj?: wsb.AgrAprMultinivel;
  public t1_c2_multinivel_cod: string = '';
  public t1_c2_multinivel_des: string = '';

  //Coluna 3
  public t1_c3_requisitado: string = 'NÃO';
  public t1_c3_vendido: string = 'SIM';
  public t1_c3_comprado: string = 'SIM';
  public t1_c3_orcamento: string = 'NÃO';

  public t1_c3_vendido_upl_chk: boolean = false;
  public t1_c3_vendido_upl_txt: string = '';

  public t1_c3_receita_chk: boolean = false;
  public t1_c3_receita_txt: string = '';

  public t1_c3_venda_virtual_chk: boolean = false;
  public t1_c3_venda_virtual_txt: string = '';

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

  public t2_fornecedor_arr: wsb.Marca[] = [];
  public t2_fornecedor_obj?: wsb.Marca;
  public t2_fornecedor_cod: string = '';
  public t2_fornecedor_des: string = '';

  public t2_quantidade_multipla: number = 0;
  public t2_quantidade_maxima: number = 0;
  public t2_quantidade_minima: number = 0;
  public t2_codigo_produto: string = '';

  /**
   * Dados de depósito
   */

  public t3_mandatory_to_readonly: boolean = true;

  public t3_c1_destino: string = '';
  public t3_c1_quan_estoque_rep: number = 0;
  public t3_c1_quan_min_vendas: number = 0;

  public t3_c2_quan_estoque_min: number = 0;
  public t3_c2_quan_estoque_max: number = 0;
  public t3_c2_quan_max_vendas: number = 0;

  public t3_c3_estoque_min: number = 0;
  public t3_c3_estoque_max: number = 0;

  public t3_c4_quan_mul_ven: number = 0;
  public t3_c4_quan_mul_com: number = 0;

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

  public t5_mandatory_to_readonly: boolean = true;

  //Coluna 1
  public t5_c1_descricao: string = '';

  public t5_c1_mascara_arr: wsb.MascaraDerivacao[] = [];
  public t5_c1_mascara_obj?: wsb.MascaraDerivacao;
  public t5_c1_mascara_cod: string = '';
  public t5_c1_mascara_des: string = '';

  public t5_c1_agru_estoques_arr: wsb.AgrupEstoques[] = [];
  public t5_c1_agru_estoques_obj?: wsb.AgrupEstoques;
  public t5_c1_agru_estoques_cod: string = '';
  public t5_c1_agru_estoques_des: string = '';

  public t5_c1_agru_custos_arr: wsb.AgrupCustos[] = [];
  public t5_c1_agru_custos_obj?: wsb.AgrupCustos;
  public t5_c1_agru_custos_cod: string = '';
  public t5_c1_agru_custos_des: string = '';

  //Coluna 2
  public t5_c2_medida_2_arr: wsb.UnidadeMedida[] = [];
  public t5_c2_medida_2_obj?: wsb.UnidadeMedida;
  public t5_c2_medida_2_cod: string = '';
  public t5_c2_medida_2_des: string = '';

  public t5_c2_medida_2_tip_con_arr: wsb.TipoConversao[] = [];
  public t5_c2_medida_2_tip_con_obj?: wsb.TipoConversao;
  public t5_c2_medida_2_tip_con_cod: string = '';
  public t5_c2_medida_2_tip_con_des: string = '';

  public t5_c2_medida_2_val_con: number = 0;

  public t5_c2_medida_3_arr: wsb.UnidadeMedida[] = [];
  public t5_c2_medida_3_obj?: wsb.UnidadeMedida;
  public t5_c2_medida_3_cod: string = '';
  public t5_c2_medida_3_des: string = '';

  public t5_c2_medida_3_tip_con_arr: wsb.TipoConversao[] = [];
  public t5_c2_medida_3_tip_con_obj?: wsb.TipoConversao;
  public t5_c2_medida_3_tip_con_cod: string = '';
  public t5_c2_medida_3_tip_con_des: string = '';

  public t5_c2_medida_3_val_con: number = 0;

  //Coluna 3
  public t5_c3_peso_bruto: number = 0;

  public t5_c3_peso_liquido: number = 0;

  public t5_c3_observacao: string = '';

  public t5_c3_anexo_files: File[] = [];
  public t5_c3_anexo_ged_arr: Anexo[] = [];
  public t5_c3_anexo_pasta_id: string = '';
  public t5_c3_anexo_pasta_nome: string = 'Anexo cadastro';

  //Coluna 4
  public t5_c4_recusa: string = '';

  /**
   * Dados fiscais e contábeis
   */

  public t6_mandatory_to_readonly: boolean = true;

  //Coluna 1
  public t6_c1_tipo_prod_arr: wsb.TipoProduto[] = [];
  public t6_c1_tipo_prod_obj?: wsb.TipoProduto;
  public t6_c1_tipo_prod_cod: string = '';
  public t6_c1_tipo_prod_des: string = '';

  public t6_c1_icms_especial_arr: wsb.ICMS[] = [];
  public t6_c1_icms_especial_obj?: wsb.ICMS;
  public t6_c1_icms_especial_cod: string = '';

  public t6_c1_reducao_icms_arr: wsb.ICMS[] = [];
  public t6_c1_reducao_icms_obj?: wsb.ICMS;
  public t6_c1_reducao_icms_cod: string = '';

  public t6_c1_icms_substituido_arr: wsb.ICMS[] = [];
  public t6_c1_icms_substituido_obj?: wsb.ICMS;
  public t6_c1_icms_substituido_cod: string = '';

  public t6_c1_pis_subs_arr: wsb.Pis[] = [];
  public t6_c1_pis_subs_obj?: wsb.Pis;
  public t6_c1_pis_subs_cod: string = '';

  public t6_c1_cof_subs_cofi_arr: wsb.Cofins[] = [];
  public t6_c1_cof_subs_obj?: wsb.Cofins;
  public t6_c1_cof_subs_cod: string = '';

  public t6_c1_pis_recu_chk: boolean = false;
  public t6_c1_pis_recu_txt: string = '';

  public t6_c1_cof_recu_chk: boolean = false;
  public t6_c1_cof_recu_txt: string = '';

  public t6_c1_pis_trib_chk: boolean = false;
  public t6_c1_pis_trib_txt: string = '';

  public t6_c1_cof_tributa_chk: boolean = false;
  public t6_c1_cof_tributa_txt: string = '';

  //Coluna 2
  public t6_c2_pis_situ_ven_arr: wsb.SituacaoTributaria[] = [];
  public t6_c2_pis_situ_ven_obj?: wsb.SituacaoTributaria;
  public t6_c2_pis_situ_ven_cod: string = '';
  public t6_c2_pis_situ_ven_des: string = '';

  public t6_c2_pis_natu_arr: wsb.NaturezaReceita[] = [];
  public t6_c2_pis_natu_obj?: wsb.NaturezaReceita;
  public t6_c2_pis_natu_cod: string = '';
  public t6_c2_pis_natu_des: string = '';

  public t6_c2_cof_situ_ven_arr: wsb.SituacaoTributaria[] = [];
  public t6_c2_cof_situ_ven_obj?: wsb.SituacaoTributaria;
  public t6_c2_cof_situ_ven_cod: string = '';
  public t6_c2_cof_situ_ven_des: string = '';

  public t6_c2_cof_natu_arr: wsb.NaturezaReceita[] = [];
  public t6_c2_cof_natu_obj?: wsb.NaturezaReceita;
  public t6_c2_cof_natu_cod: string = '';
  public t6_c2_cof_natu_des: string = '';

  public t6_c2_enquadramento_arr: wsb.Enquadramento[] = [];
  public t6_c2_enquadramento_obj?: wsb.Enquadramento;
  public t6_c2_enquadramento_cod: string = '';
  public t6_c2_enquadramento_des: string = '';

  public t6_c2_pis_situ_com_arr: wsb.SituacaoTributaria[] = [];
  public t6_c2_pis_situ_com_obj?: wsb.SituacaoTributaria;
  public t6_c2_pis_situ_com_cod: string = '';
  public t6_c2_pis_situ_com_des: string = '';

  public t6_c2_cof_situ_com_arr: wsb.SituacaoTributaria[] = [];
  public t6_c2_cof_situ_com_obj?: wsb.SituacaoTributaria;
  public t6_c2_cof_situ_com_cod: string = '';
  public t6_c2_cof_situ_com_des: string = '';

  public t6_c2_produto_fornecedor_chk: boolean = false;
  public t6_c2_produto_fornecedor_txt: string = '';

  public t6_c2_funrural: number = 0;

  public t6_c2_gilrat: number = 0;

  //Coluna 3
  public t6_c3_senart: number = 0;

  public t6_c3_enquadra_espe_arr: wsb.Enquadramento[] = [];
  public t6_c3_enquadra_espe_obj?: wsb.Enquadramento;
  public t6_c3_enquadra_espe_cod: string = '';
  public t6_c3_enquadra_espe_des: string = '';

  public t6_c3_desoneracao_arr: wsb.Desoneracao[] = [];
  public t6_c3_desoneracao_obj?: wsb.Desoneracao;
  public t6_c3_desoneracao_cod: string = '';
  public t6_c3_desoneracao_des: string = '';

  public t6_c3_substituicao: string = '';

  public t6_c3_anp_arr: wsb.ProdutoANP[] = [];
  public t6_c3_anp_obj?: wsb.ProdutoANP;
  public t6_c3_anp_cod: string = '';
  public t6_c3_anp_des: string = '';

  public t6_c3_pauta_arr: wsb.PautaFiscal[] = [];
  public t6_c3_pauta_obj?: wsb.PautaFiscal;
  public t6_c3_pauta_cod: string = '';
  public t6_c3_pauta_des: string = '';

  public t6_c3_cbenef_arr: wsb.CBenef[] = [];
  public t6_c3_cbenef_obj?: wsb.CBenef;
  public t6_c3_cbenef_cod: string = '';
  public t6_c3_cbenef_des: string = '';

  //Coluna 4
  public t6_c4_observacoes: string = '';

  public t6_c4_recusa: string = '';

  public t6_c4_anexo_files: File[] = [];
  public t6_c4_anexo_ged_arr: Anexo[] = [];
  public t6_c4_anexo_pasta_id: string = '';
  public t6_c4_anexo_pasta_nome: string = 'Anexo fiscal/cotábil';
}

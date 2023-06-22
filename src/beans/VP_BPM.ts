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
  public overlay: boolean = false;
  public buscandoWS: boolean = false;

  public alertas: Message[] = [];

  public date_now: Date = new Date();
  public date_max: Date = new Date(8640000000000000);

  public token: string = '';
  public user_fullname: string = '';

  public ged_pasta_pai_id: string = '';
  public ged_pasta_pai_nome: string = 'Cadastro de produto';

  public ged_pasta_processo_id: string = '';
  public ged_pasta_processo_nome: string = '';

  public check_options: SelectItem[] = [
    { label: 'Sim', value: 'Sim' },
    { label: 'Não', value: 'Não' },
  ];

  public unidades_medida_arr: wsb.ExportaUniMeds[] = [];

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

  public t1_requisitado: string = 'Não';

  public t1_vendido: string = 'Sim';

  public t1_comprado: string = 'Sim';

  public t1_orcamento: string = 'Não';

  public t1_c2_substituto_cad: string = '';
  public t1_c2_substituto_arr: wsb.ExportaProdutos[] = [];
  public t1_c2_substituto_obj?: wsb.ExportaProdutos;
  public t1_c2_substituto_cod: string = '';

  public t1_cotado: string = '';

  public t1_c3_clafiscal_arr: wsb.ExportaClaFis[] = [];
  public t1_c3_clafiscal_obj?: wsb.ExportaClaFis;
  public t1_c3_clafiscal_cod: string = '';
  public t1_c3_clafiscal_des: string = '';

  public t1_barras: string = '';
  public t1_barras_just: string = '';

  public t1_c4_origem_arr: wsb.ExportaOrigens[] = [];
  public t1_c4_origem_obj?: wsb.ExportaOrigens;
  public t1_c4_origem_cod: string = '';
  public t1_c4_origem_des: string = '';

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

  public t1_c8_agrcomercial_arr: wsb.ExportaAgrupamentos[] = [];
  public t1_c8_agrcomercial_obj?: wsb.ExportaAgrupamentos;
  public t1_c8_agrcomercial_cod: string = '';
  public t1_c8_agrcomercial_des: string = '';

  public t1_c9_agrestoque_arr: wsb.ExportaAgrupamentos[] = [];
  public t1_c9_agrestoque_obj?: wsb.ExportaAgrupamentos;
  public t1_c9_agrestoque_cod: string = '';
  public t1_c9_agrestoque_des: string = '';

  public t1_c10_agrcusto_arr: wsb.ExportaAgrupamentos[] = [];
  public t1_c10_agrcusto_obj?: wsb.ExportaAgrupamentos;
  public t1_c10_agrcusto_cod: string = '';
  public t1_c10_agrcusto_des: string = '';

  public t1_especificacao: string = '';

  public t1_c11_multinivel_arr: wsb.ExportaAgrupamentos[] = [];
  public t1_c11_multinivel_obj?: wsb.ExportaAgrupamentos;
  public t1_c11_multinivel_cod: string = '';

  /**
   * Dados de fornecedor
   */

  public t2_req_to_read: boolean = false;

  public t2_fornecedor_arr: wsb.ExportaFornecedores[] = [];
  public t2_fornecedor_obj?: wsb.ExportaFornecedores;
  public t2_fornecedor_cod: number = -1;
  public t2_fornecedor_des: string = '';

  public t2_quantidade_multipla?: number;

  public t2_quantidade_maxima?: number;

  public t2_quantidade_minima?: number;

  public t2_produto_fornecedor: string = '';

  /**
   * Dados de depósito
   */

  public t3_req_to_read: boolean = false;

  //Coluna 1
  public t3_c1_destino_arr: wsb.ExportaDepositos[] = [];
  public t3_c1_destino_obj?: wsb.ExportaDepositos;
  public t3_c1_destino_sel: wsb.ExportaDepositos[] = [];
  public t3_c1_destino_stx: string = '';
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
   * Dados do cadastro
   */

  public t5_req_to_read: boolean = false;

  public t5_conversao_arr: wsb.ExportaValorLista[] = [];

  public t5_descricao: string = '';

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

  public t5_peso_bruto?: number;

  public t5_peso_liquido?: number;

  public t5_observacao: string = '';

  public t5_file_TS: File[] = [];
  public t5_file_GED: Anexo[] = [];
  public t5_pasta_id: string = '';
  public t5_pasta_nome: string = 'Anexo cadastro';

  public t5_recusa: string = '';

  public t5_show_only_recusa: boolean = false;

  /**
   * Dados fiscais e contábeis
   */

  public t6_c1_impostos_arr: wsb.ExportaValorLista[] = [];
  public t6_c1_impostos_obj?: wsb.ExportaValorLista;
  public t6_c1_impostos_cod: number = -1;
  public t6_c1_impostos_des: string = '';

  public t6_req_to_read: boolean = false;

  public t6_recupera_pis: string = '';

  public t6_recupera_cof: string = '';

  public t6_tributa_pis: string = '';

  public t6_tributa_cof: string = '';

  public t6_produ_forne: string = '';

  public t6_funrural?: number;

  public t6_gilrat?: number;

  public t6_show_only_recusa: boolean = false;

  //Coluna 1

  public t6_c1_c2_icms_especial_arr: wsb.ExportaICMSEsp[] = [];
  public t6_c1_c2_icms_especial_obj?: wsb.ExportaICMSEsp;
  public t6_c1_c2_icms_especial_cod: string = '';

  public t6_c1_c2_reducao_icms_arr: wsb.ExportaReducaoICMS[] = [];
  public t6_c1_c2_reducao_icms_obj?: wsb.ExportaReducaoICMS;
  public t6_c1_c2_reducao_icms_cod: string = '';

  public t6_c1_substituicao_arr: wsb.ExportaSubstituicao[] = [];

  public t6_c1_c3_icm_subs_obj?: wsb.ExportaSubstituicao;
  public t6_c1_c3_icm_subs_cod: string = '';

  public t6_c1_c3_cof_subs_obj?: wsb.ExportaSubstituicao;
  public t6_c1_c3_cof_subs_cod: string = '';

  public t6_c1_c3_pis_subs_obj?: wsb.ExportaSubstituicao;
  public t6_c1_c3_pis_subs_cod: string = '';

  //Coluna 2
  public t6_c2_sit_tri_arr: wsb.ExportaValorLista[] = [];

  public t6_c2_c1_pis_ven_obj?: wsb.ExportaValorLista;
  public t6_c2_c1_pis_ven_cod: string = '';
  public t6_c2_c1_pis_ven_des: string = '';

  public t6_c2_c1_pis_nat_cod?: number;

  public t6_c2_c2_cof_ven_obj?: wsb.ExportaValorLista;
  public t6_c2_c2_cof_ven_cod: string = '';
  public t6_c2_c2_cof_ven_des: string = '';

  public t6_c2_c2_cof_nat_cod?: number;

  public t6_c2_c3_enqua_arr: wsb.ExportaEnquadramento[] = [];
  public t6_c2_c3_enqua_obj?: wsb.ExportaEnquadramento;
  public t6_c2_c3_enqua_cod?: number;

  public t6_c2_c4_pis_com_obj?: wsb.ExportaValorLista;
  public t6_c2_c4_pis_com_cod: string = '';
  public t6_c2_c4_pis_com_des: string = '';

  public t6_c2_c4_cof_com_obj?: wsb.ExportaValorLista;
  public t6_c2_c4_cof_com_cod: string = '';
  public t6_c2_c4_cof_com_des: string = '';

  //Coluna 3
  public t6_senart?: number;

  public t6_c3_c1_enq_esp_arr: wsb.ExportaValorLista[] = [];
  public t6_c3_c1_enq_esp_obj?: wsb.ExportaValorLista;
  public t6_c3_c1_enq_esp_cod: number = -1;
  public t6_c3_c1_enq_esp_des: string = '';

  public t6_c3_c2_motivo_arr: wsb.ExportaValorLista[] = [];
  public t6_c3_c2_motivo_obj?: wsb.ExportaValorLista;
  public t6_c3_c2_motivo_cod: number = 0;
  public t6_c3_c2_motivo_des: string = 'Nenhum';

  public t6_c3_substituicao: string = '';

  public t6_c3_c3_anp_cod?: number;

  public t6_c3_c3_anp_des: string = '';

  public t6_c3_cal_fun: string = '';

  public t6_c3_cal_sen: string = '';

  public t6_pauta: string = '';

  public t6_benef: string = '';

  //Coluna 4
  public t6_observacoes: string = '';

  public t6_recusa: string = '';

  public t6_c4_c2_anexo_files: File[] = [];
  public t6_c4_c2_anexo_ged_arr: Anexo[] = [];
  public t6_c4_c2_anexo_pasta_id: string = '';
  public t6_c4_c2_anexo_pasta_nome: string = 'Anexo fiscal/cotábil';

  /**
   * Resposta do ws cadastro
   */

  public c7_cadastro_hide: boolean = true;
  public c7_cadastro_disabled: boolean = false;

  public c7_codigo_produto: string = '';
  public c7_mensagem_retorno: string = '';
}

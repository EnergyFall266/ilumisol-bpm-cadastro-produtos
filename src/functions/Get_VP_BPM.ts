import { VP_BPM } from 'src/beans/VP_BPM';

export default function getVP(vp: VP_BPM, map: Map<any, any>): VP_BPM {
  vp.ged_pasta_pai_id = map.get('ged_pasta_pai_id');
  vp.ged_pasta_processo_id = map.get('ged_pasta_processo_id');

  /**
   * Dados básicos
   */

  //Coluna 1
  vp.t1_c1_segmento = map.get('t1_c1_segmento');

  vp.t1_c1_c1_substituto_cad = map.get('t1_c1_c1_substituto_cad');

  if (vp.t1_c1_c1_substituto_cad == 'Sim')
    vp.t1_c1_c1_item_subs_cod = map.get('t1_c1_c1_item_subs_cod');

  vp.t1_c1_c2_similar_exi = map.get('t1_c1_c2_similar_exi');

  if (vp.t1_c1_c2_similar_exi == 'Sim')
    vp.t1_c1_c2_item_simi_cod = map.get('t1_c1_c2_item_simi_cod');

  vp.t1_c1_c3_origem_cod = map.get('t1_c1_c3_origem_cod');
  vp.t1_c1_c3_origem_des = map.get('t1_c1_c3_origem_des');

  vp.t1_c1_c4_familia_cod = map.get('t1_c1_c4_familia_cod');
  vp.t1_c1_c4_familia_des = map.get('t1_c1_c4_familia_des');

  vp.t1_c1_descricao = map.get('t1_c1_descricao');

  vp.t1_c1_c5_medida_cod = map.get('t1_c1_c5_medida_cod');
  vp.t1_c1_c5_medida_des = map.get('t1_c1_c5_medida_des');

  vp.t1_c1_cotado = map.get('t1_c1_cotado');

  vp.t1_c1_c5_medida_cod = map.get('t1_c1_c5_medida_cod');
  vp.t1_c1_c5_medida_des = map.get('t1_c1_c5_medida_des');

  vp.t1_c1_cotado = map.get('t1_c1_cotado');

  //Coluna 2
  if (map.get('t1_c2_c1_marca_cod') !== undefined) {
    vp.t1_c2_c1_marca_cod = map.get('t1_c2_c1_marca_cod');
    vp.t1_c2_c1_marca_des = map.get('t1_c2_c1_marca_des');
  }

  vp.t1_c2_c2_clafiscal_cod = map.get('t1_c2_c2_clafiscal_cod');
  vp.t1_c2_c2_clafiscal_des = map.get('t1_c2_c2_clafiscal_des');

  if (map.get('t1_c2_c3_barras') !== undefined)
    vp.t1_c2_c3_barras = map.get('t1_c2_c3_barras');

  if (map.get('t1_c2_c3_barras_justificativa') !== undefined)
    vp.t1_c2_c3_barras_justificativa = map.get('t1_c2_c3_barras_justificativa');

  vp.t1_c2_c4_agrupamento_cod = map.get('t1_c2_c4_agrupamento_cod');
  vp.t1_c2_c4_agrupamento_des = map.get('t1_c2_c4_agrupamento_des');

  vp.t1_c2_especificacao = map.get('t1_c2_especificacao');

  vp.t1_c2_c5_mercadoria_cod = map.get('t1_c2_c5_mercadoria_cod');
  vp.t1_c2_c5_mercadoria_des = map.get('t1_c2_c5_mercadoria_des');

  vp.t1_c2_c6_integra_agrosys = map.get('t1_c2_c6_integra_agrosys');

  if (map.get('t1_c2_c6_agrosys_cod') !== undefined) {
    vp.t1_c2_c6_agrosys_cod = map.get('t1_c2_c6_agrosys_cod');
    vp.t1_c2_c6_agrosys_des = map.get('t1_c2_c6_agrosys_des');
  }

  if (map.get('t1_c2_c7_multinivel_cod') !== undefined)
    vp.t1_c2_c7_multinivel_cod = map.get('t1_c2_c7_multinivel_cod');

  //Coluna 3
  vp.t1_c3_vendido_upl = map.get('t1_c3_vendido_upl');

  vp.t1_c3_receita = map.get('t1_c3_receita');

  vp.t1_c3_c2_venda_virtual = map.get('t1_c3_c2_venda_virtual');

  if (map.get('t1_c3_c2_categoria_cod') !== undefined) {
    vp.t1_c3_c2_categoria_cod = +map.get('t1_c3_c2_categoria_cod');
    vp.t1_c3_c2_categoria_des = map.get('t1_c3_c2_categoria_des');
  }

  if (map.get('t1_c3_c2_subcategoria_cod') !== undefined) {
    vp.t1_c3_c2_subcategoria_cod = +map.get('t1_c3_c2_subcategoria_cod');
    vp.t1_c3_c2_subcategoria_des = map.get('t1_c3_c2_subcategoria_des');
  }

  if (map.get('t1_c3_numero_onu') !== undefined)
    vp.t1_c3_numero_onu = map.get('t1_c3_numero_onu');

  //Coluna 4
  if (map.get('t1_c4_c1_toxico_cod') !== undefined) {
    vp.t1_c4_c1_toxico_cod = +map.get('t1_c4_c1_toxico_cod');
    vp.t1_c4_c1_toxico_des = map.get('t1_c4_c1_toxico_des');
  }

  if (map.get('t1_c4_c2_risco_cod') !== undefined) {
    vp.t1_c4_c2_risco_cod = map.get('t1_c4_c2_risco_cod');
    vp.t1_c4_c2_risco_des = map.get('t1_c4_c2_risco_des');
  }

  if (map.get('t1_c4_numero_risco') !== undefined)
    vp.t1_c4_numero_risco = map.get('t1_c4_numero_risco');

  if (map.get('t1_c4_numero_mapa') !== undefined)
    vp.t1_c4_numero_mapa = map.get('t1_c4_numero_mapa');

  if (map.get('t1_c4_quimico_cod') !== undefined) {
    vp.t1_c4_c3_quimico_cod = +map.get('t1_c4_quimico_cod');
    vp.t1_c4_c3_quimico_des = map.get('t1_c4_quimico_des');
  }

  /**
   * Dados de fornecedor
   */

  if (map.get('t2_fornecedor_cod') !== undefined) {
    vp.t2_fornecedor_cod = +map.get('t2_fornecedor_cod');
    vp.t2_fornecedor_des = map.get('t2_fornecedor_des');
  }

  vp.t2_quantidade_multipla = +map.get('t2_quantidade_multipla');

  vp.t2_quantidade_maxima = +map.get('t2_quantidade_maxima');

  vp.t2_quantidade_minima = +map.get('t2_quantidade_minima');

  if (map.get('t2_produto_fornecedor') !== undefined)
    vp.t2_produto_fornecedor = map.get('t2_produto_fornecedor');

  /**
   * Dados de depósito
   */

  //Coluna 1
  vp.t3_c1_destino_stx = map.get('t3_c1_destino_stx');
  vp.t3_c1_destino_cod = map.get('t3_c1_destino_cod');
  vp.t3_c1_destino_des = map.get('t3_c1_destino_des');

  if (map.get('t3_c1_quan_estoque_rep') !== undefined)
    vp.t3_c1_quan_estoque_rep = +map.get('t3_c1_quan_estoque_rep');

  vp.t3_c1_quan_min_vendas = +map.get('t3_c1_quan_min_vendas');

  //Coluna 2
  if (map.get('t3_c2_quan_estoque_min') !== undefined)
    vp.t3_c2_quan_estoque_min = +map.get('t3_c2_quan_estoque_min');

  if (map.get('t3_c2_quan_estoque_max') !== undefined)
    vp.t3_c2_quan_estoque_max = +map.get('t3_c2_quan_estoque_max');

  vp.t3_c2_quan_max_vendas = +map.get('t3_c2_quan_max_vendas');

  //Coluna 3
  if (map.get('t3_c3_estoque_min') !== undefined)
    vp.t3_c3_estoque_min = +map.get('t3_c3_estoque_min');

  if (map.get('t3_c3_estoque_max') !== undefined)
    vp.t3_c3_estoque_max = +map.get('t3_c3_estoque_max');

  //Coluna 4
  vp.t3_c4_quan_mul_ven = +map.get('t3_c4_quan_mul_ven');

  vp.t3_c4_quan_mul_com = +map.get('t3_c4_quan_mul_com');

  /**
   * Observações e Anexos
   */

  if (map.get('t4_observacoes') !== undefined)
    vp.t4_observacoes = map.get('t4_observacoes');

  if (map.get('t4_anexo_pasta_id') !== undefined)
    vp.t4_anexo_pasta_id = map.get('t4_anexo_pasta_id');

  /**
   * Dados do cadastro
   */

  //Coluna 1
  if (map.get('t5_c1_descricao') !== undefined)
    vp.t5_c1_descricao = map.get('t5_c1_descricao');

  if (map.get('t5_c1_c1_mascara_cod') !== undefined) {
    vp.t5_c1_c1_mascara_cod = map.get('t5_c1_c1_mascara_cod');
    vp.t5_c1_c1_mascara_des = map.get('t5_c1_c1_mascara_des');
  }

  if (map.get('t5_c1_c2_agr_est_cod') !== undefined) {
    vp.t5_c1_c2_agr_est_cod = map.get('t5_c1_c2_agr_est_cod');
    vp.t5_c1_c2_agr_est_des = map.get('t5_c1_c2_agr_est_des');
  }

  if (map.get('t5_c1_c2_agr_cus_cod') !== undefined) {
    vp.t5_c1_c2_agr_cus_cod = map.get('t5_c1_c2_agr_cus_cod');
    vp.t5_c1_c2_agr_cus_des = map.get('t5_c1_c2_agr_cus_des');
  }

  //Coluna 2
  if (map.get('t5_c2_c1_med_2_cod') !== undefined) {
    vp.t5_c2_c1_med_2_cod = map.get('t5_c2_c1_med_2_cod');
    vp.t5_c2_c1_med_2_des = map.get('t5_c2_c1_med_2_des');
  }

  if (map.get('t5_c2_c1_med_3_cod') !== undefined) {
    vp.t5_c2_c1_med_3_cod = map.get('t5_c2_c1_med_3_cod');
    vp.t5_c2_c1_med_3_des = map.get('t5_c2_c1_med_3_des');
  }

  if (map.get('t5_c2_c2_med_2_tip_cod') !== undefined) {
    vp.t5_c2_c2_med_2_tip_cod = map.get('t5_c2_c2_med_2_tip_cod');
    vp.t5_c2_c2_med_2_tip_des = map.get('t5_c2_c2_med_2_tip_des');
  }

  if (map.get('t5_c2_c2_med_2_val') !== undefined)
    vp.t5_c2_c2_med_2_val = +map.get('t5_c2_c2_med_2_val');

  if (map.get('t5_c2_c3_med_3_tip_cod') !== undefined) {
    vp.t5_c2_c3_med_3_tip_cod = map.get('t5_c2_c3_med_3_tip_cod');
    vp.t5_c2_c3_med_3_tip_des = map.get('t5_c2_c3_med_3_tip_des');
  }

  if (map.get('t5_c2_c3_med_3_val') !== undefined)
    vp.t5_c2_c3_med_3_val = +map.get('t5_c2_c3_med_3_val');

  //Coluna 3
  if (map.get('t5_c3_c1_peso_bruto') !== undefined)
    vp.t5_c3_c1_peso_bruto = +map.get('t5_c3_c1_peso_bruto');

  if (map.get('t5_c3_c1_peso_liquido') !== undefined)
    vp.t5_c3_c1_peso_liquido = +map.get('t5_c3_c1_peso_liquido');

  if (map.get('t5_c3_observacao') !== undefined)
    vp.t5_c3_observacao = map.get('t5_c3_observacao');

  if (map.get('t5_c3_c2_anexo_pasta_id') !== undefined)
    vp.t5_c3_c2_anexo_pasta_id = map.get('t5_c3_c2_anexo_pasta_id');

  //Coluna 4
  if (map.get('t5_c4_recusa') !== undefined)
    vp.t5_c4_recusa = map.get('t5_c4_recusa');

  /**
   * Dados fiscais e contábeis
   */

  //Coluna 1
  if (map.get('t6_c1_c1_tipo_prod_cod') !== undefined) {
    vp.t6_c1_c1_tipo_prod_cod = map.get('t6_c1_c1_tipo_prod_cod');
    vp.t6_c1_c1_tipo_prod_des = map.get('t6_c1_c1_tipo_prod_des');
  }

  if (map.get('t6_c1_c2_icms_especial_cod') !== undefined)
    vp.t6_c1_c2_icms_especial_cod = map.get('t6_c1_c2_icms_especial_cod');

  if (map.get('t6_c1_c2_reducao_icms_cod') !== undefined)
    vp.t6_c1_c2_reducao_icms_cod = map.get('t6_c1_c2_reducao_icms_cod');

  if (map.get('t6_c1_c3_icm_subs_cod') !== undefined)
    vp.t6_c1_c3_icm_subs_cod = map.get('t6_c1_c3_icm_subs_cod');

  if (map.get('t6_c1_c3_cof_subs_cod') !== undefined)
    vp.t6_c1_c3_cof_subs_cod = map.get('t6_c1_c3_cof_subs_cod');

  if (map.get('t6_c1_c3_pis_subs_cod') !== undefined)
    vp.t6_c1_c3_pis_subs_cod = map.get('t6_c1_c3_pis_subs_cod');

  if (map.get('t6_c1_pis_recu') !== undefined)
    vp.t6_c1_pis_recu = map.get('t6_c1_pis_recu');

  if (map.get('t6_c1_cof_recu') !== undefined)
    vp.t6_c1_cof_recu = map.get('t6_c1_cof_recu');

  if (map.get('t6_c1_pis_trib') !== undefined)
    vp.t6_c1_pis_trib = map.get('t6_c1_pis_trib');

  if (map.get('t6_c1_cof_trib') !== undefined)
    vp.t6_c1_cof_trib = map.get('t6_c1_cof_trib');

  //Coluna 2
  if (map.get('t6_c2_c1_pis_ven_cod') !== undefined) {
    vp.t6_c2_c1_pis_ven_cod = map.get('t6_c2_c1_pis_ven_cod');
    vp.t6_c2_c1_pis_ven_des = map.get('t6_c2_c1_pis_ven_des');
  }

  if (map.get('t6_c2_c1_pis_nat_cod') !== undefined)
    vp.t6_c2_c1_pis_nat_cod = map.get('t6_c2_c1_pis_nat_cod');

  if (map.get('t6_c2_c2_cof_ven_cod') !== undefined) {
    vp.t6_c2_c2_cof_ven_cod = map.get('t6_c2_c2_cof_ven_cod');
    vp.t6_c2_c2_cof_ven_des = map.get('t6_c2_c2_cof_ven_des');
  }

  if (map.get('t6_c2_c2_cof_nat_cod') !== undefined)
    vp.t6_c2_c2_cof_nat_cod = map.get('t6_c2_c2_cof_nat_cod');

  if (map.get('t6_c2_c3_enqua_cod') !== undefined)
    vp.t6_c2_c3_enqua_cod = +map.get('t6_c2_c3_enqua_cod');

  if (map.get('t6_c2_c4_pis_com_cod') !== undefined) {
    vp.t6_c2_c4_pis_com_cod = map.get('t6_c2_c4_pis_com_cod');
    vp.t6_c2_c4_pis_com_des = map.get('t6_c2_c4_pis_com_des');
  }

  if (map.get('t6_c2_c4_cof_com_cod') !== undefined) {
    vp.t6_c2_c4_cof_com_cod = map.get('t6_c2_c4_cof_com_cod');
    vp.t6_c2_c4_cof_com_des = map.get('t6_c2_c4_cof_com_des');
  }

  if (map.get('t6_c2_usa_pro_for') !== undefined)
    vp.t6_c2_usa_pro_for = map.get('t6_c2_usa_pro_for');

  if (map.get('t6_c2_funrural') !== undefined)
    vp.t6_c2_funrural = +map.get('t6_c2_funrural');

  if (map.get('t6_c2_gilrat') !== undefined)
    vp.t6_c2_gilrat = +map.get('t6_c2_gilrat');

  //Coluna 3
  if (map.get('t6_c3_senart') !== undefined)
    vp.t6_c3_senart = +map.get('t6_c3_senart');

  if (map.get('t6_c3_c1_enq_esp_cod') !== undefined) {
    vp.t6_c3_c1_enq_esp_cod = map.get('t6_c3_c1_enq_esp_cod');
    vp.t6_c3_c1_enq_esp_des = map.get('t6_c3_c1_enq_esp_des');
  }

  if (map.get('t6_c3_c2_motivo_cod') !== undefined) {
    vp.t6_c3_c2_motivo_cod = map.get('t6_c3_c2_motivo_cod');
    vp.t6_c3_c2_motivo_des = map.get('t6_c3_c2_motivo_des');
  }

  if (map.get('t6_c3_substituicao') !== undefined)
    vp.t6_c3_substituicao = map.get('t6_c3_substituicao');

  if (map.get('t6_c3_c3_anp_cod') !== undefined)
    vp.t6_c3_c3_anp_cod = +map.get('t6_c3_c3_anp_cod');

  if (map.get('t6_c3_c3_anp_des') !== undefined)
    vp.t6_c3_c3_anp_des = map.get('t6_c3_c3_anp_des');

  if (map.get('t6_c3_cal_fun') !== undefined)
    vp.t6_c3_cal_fun = map.get('t6_c3_cal_fun');

  if (map.get('t6_c3_cal_sen') !== undefined)
    vp.t6_c3_cal_sen = map.get('t6_c3_cal_sen');

  if (map.get('t6_c3_c4_pauta') !== undefined)
    vp.t6_c3_c4_pauta = map.get('t6_c3_c4_pauta');

  if (map.get('t6_c3_c5_benef') !== undefined)
    vp.t6_c3_c5_benef = map.get('t6_c3_c5_benef');

  //Coluna 4
  if (map.get('t6_c4_c1_observacoes') !== undefined)
    vp.t6_c4_c1_observacoes = map.get('t6_c4_c1_observacoes');

  if (map.get('t6_c4_c1_recusa') !== undefined)
    vp.t6_c4_c1_recusa = map.get('t6_c4_c1_recusa');

  if (map.get('t6_c4_c2_anexo_pasta_id') !== undefined)
    vp.t6_c4_c2_anexo_pasta_id = map.get('t6_c4_c2_anexo_pasta_id');

  return vp;
}

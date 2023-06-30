import { VP_BPM } from 'src/beans/VP_BPM';

export default function getVP(vp: VP_BPM, map: Map<any, any>): VP_BPM {
  vp.ged_pasta_pai_id = map.get('ged_pasta_pai_id');
  vp.ged_pasta_processo_id = map.get('ged_pasta_processo_id');

  vp.c1_empresa_cod = map.get('c1_empresa_cod');
  vp.c1_empresa_nom = map.get('c1_empresa_nom');

  /**
   * Dados básicos
   */

  vp.t1_c4_origem_cod = map.get('t1_c4_origem_cod');
  vp.t1_c4_origem_des = map.get('t1_c4_origem_des');

  vp.t1_c5_familia_cod = map.get('t1_c5_familia_cod');
  vp.t1_c5_familia_des = map.get('t1_c5_familia_des');

  vp.t1_descricao_prod = map.get('t1_descricao_prod');

  vp.t1_c6_medida_cod = map.get('t1_c6_medida_cod');
  vp.t1_c6_medida_des = map.get('t1_c6_medida_des');

  vp.t1_c6_medida_cod = map.get('t1_c6_medida_cod');
  vp.t1_c6_medida_des = map.get('t1_c6_medida_des');

  vp.t1_requisitado = map.get('t1_requisitado');

  vp.t1_vendido = map.get('t1_vendido');

  vp.t1_comprado = map.get('t1_comprado');

  vp.t1_orcamento = map.get('t1_orcamento');

  vp.t1_cotado = map.get('t1_cotado');

  if (map.get('t1_c1_marca_cod') !== undefined) {
    vp.t1_c1_marca_cod = map.get('t1_c1_marca_cod');
    vp.t1_c1_marca_des = map.get('t1_c1_marca_des');
  }

  vp.t1_c3_clafiscal_cod = map.get('t1_c3_clafiscal_cod');
  vp.t1_c3_clafiscal_des = map.get('t1_c3_clafiscal_des');

  if (map.get('t1_barras') !== undefined) vp.t1_barras = map.get('t1_barras');

  if (map.get('t1_barras_just') !== undefined)
    vp.t1_barras_just = map.get('t1_barras_just');

  vp.t1_c8_agrcomercial_cod = map.get('t1_c8_agrcomercial_cod');
  vp.t1_c8_agrcomercial_des = map.get('t1_c8_agrcomercial_des');

  vp.t1_c7_mercadoria_cod = map.get('t1_c7_mercadoria_cod');
  vp.t1_c7_mercadoria_des = map.get('t1_c7_mercadoria_des');

  vp.t1_especificacao = map.get('t1_especificacao');

  if (map.get('t1_c11_multinivel_cod') !== undefined)
    vp.t1_c11_multinivel_cod = map.get('t1_c11_multinivel_cod');

  vp.t1_altura = map.get('t1_altura');

  vp.t1_largura = map.get('t1_largura');

  vp.t1_comprimento = map.get('t1_comprimento');

  vp.t1_aplicacao = map.get('t1_aplicacao');

  vp.t1_comp_trata = map.get('t1_comp_trata');

  vp.t1_controlado = map.get('t1_controlado');

  /**
   * Dados de fornecedor
   */

  if (map.get('t2_c1_fornecedor_cod') !== undefined) {
    vp.t2_c1_fornecedor_cod = +map.get('t2_c1_fornecedor_cod');
    vp.t2_c1_fornecedor_des = map.get('t2_c1_fornecedor_des');
  }

  vp.t2_quantidade_multipla = +map.get('t2_quantidade_multipla');

  vp.t2_quantidade_maxima = +map.get('t2_quantidade_maxima');

  vp.t2_quantidade_minima = +map.get('t2_quantidade_minima');

  if (map.get('t2_produto_fornecedor_cod') !== undefined)
    vp.t2_produto_fornecedor_cod = map.get('t2_produto_fornecedor_cod');

  /**
   * Dados de depósito
   */

  //Coluna 1
  vp.t3_c1_destino_stx = map.get('t3_c1_destino_stx');
  vp.t3_c1_destino_cod = map.get('t3_c1_destino_cod');
  vp.t3_c1_destino_des = map.get('t3_c1_destino_des');

  if (map.get('t3_qtde_estoque_rep') !== undefined)
    vp.t3_qtde_estoque_rep = +map.get('t3_qtde_estoque_rep');

  vp.t3_qtde_min_vendas = +map.get('t3_qtde_min_vendas');

  //Coluna 2
  if (map.get('t3_qtde_estoque_min') !== undefined)
    vp.t3_qtde_estoque_min = +map.get('t3_qtde_estoque_min');

  if (map.get('t3_qtde_estoque_max') !== undefined)
    vp.t3_qtde_estoque_max = +map.get('t3_qtde_estoque_max');

  vp.t3_qtde_max_vendas = +map.get('t3_qtde_max_vendas');

  //Coluna 3
  if (map.get('t3_est_min_dias') !== undefined)
    vp.t3_est_min_dias = +map.get('t3_est_min_dias');

  if (map.get('t3_est_max_dias') !== undefined)
    vp.t3_est_max_dias = +map.get('t3_est_max_dias');

  //Coluna 4
  vp.t3_qtde_mul_ven = +map.get('t3_qtde_mul_ven');

  vp.t3_qtde_mul_com = +map.get('t3_qtde_mul_com');

  /**
   * Dados do cadastro
   */

  //Coluna 1
  if (map.get('t1_descricao_fiscal') !== undefined)
    vp.t1_descricao_fiscal = map.get('t1_descricao_fiscal');

  if (map.get('t5_c1_mascara_cod') !== undefined) {
    vp.t5_c1_mascara_cod = map.get('t5_c1_mascara_cod');
    vp.t5_c1_mascara_des = map.get('t5_c1_mascara_des');
  }

  if (map.get('t1_c9_agrestoque_cod') !== undefined) {
    vp.t1_c9_agrestoque_cod = map.get('t1_c9_agrestoque_cod');
    vp.t1_c9_agrestoque_des = map.get('t1_c9_agrestoque_des');
  }

  if (map.get('t1_c10_agrcusto_cod') !== undefined) {
    vp.t1_c10_agrcusto_cod = map.get('t1_c10_agrcusto_cod');
    vp.t1_c10_agrcusto_des = map.get('t1_c10_agrcusto_des');
  }

  //Coluna 2
  if (map.get('t5_c2_medida2_cod') !== undefined) {
    vp.t5_c2_medida2_cod = map.get('t5_c2_medida2_cod');
    vp.t5_c2_medida2_des = map.get('t5_c2_medida2_des');
  }

  if (map.get('t5_c3_medida3_cod') !== undefined) {
    vp.t5_c3_medida3_cod = map.get('t5_c3_medida3_cod');
    vp.t5_c3_medida3_des = map.get('t5_c3_medida3_des');
  }

  if (map.get('t5_c4_conversao2_cod') !== undefined) {
    vp.t5_c4_conversao2_cod = map.get('t5_c4_conversao2_cod');
    vp.t5_c4_conversao2_des = map.get('t5_c4_conversao2_des');
  }

  if (map.get('t5_valor2') !== undefined) vp.t5_valor2 = +map.get('t5_valor2');

  if (map.get('t5_c5_conversao3_cod') !== undefined) {
    vp.t5_c5_conversao3_cod = map.get('t5_c5_conversao3_cod');
    vp.t5_c5_conversao3_des = map.get('t5_c5_conversao3_des');
  }

  if (map.get('t5_valor3') !== undefined) vp.t5_valor3 = +map.get('t5_valor3');

  //Coluna 3
  if (map.get('t5_peso_bruto') !== undefined)
    vp.t5_peso_bruto = +map.get('t5_peso_bruto');

  if (map.get('t5_peso_liquido') !== undefined)
    vp.t5_peso_liquido = +map.get('t5_peso_liquido');

  if (map.get('t5_observacao') !== undefined)
    vp.t5_observacao = map.get('t5_observacao');

  if (map.get('t5_pasta_id') !== undefined)
    vp.t5_pasta_id = map.get('t5_pasta_id');

  //Coluna 4
  if (map.get('t5_recusa') !== undefined) vp.t5_recusa = map.get('t5_recusa');

  /**
   * Dados fiscais e contábeis
   */

  //Coluna 1
  if (map.get('t6_c1_impostos_cod') !== undefined) {
    vp.t6_c1_impostos_cod = map.get('t6_c1_impostos_cod');
    vp.t6_c1_impostos_des = map.get('t6_c1_impostos_des');
  }

  if (map.get('t6_c2_icms_espe_cod') !== undefined)
    vp.t6_c2_icms_espe_cod = map.get('t6_c2_icms_espe_cod');

  if (map.get('t6_c3_redu_icms_cod') !== undefined)
    vp.t6_c3_redu_icms_cod = map.get('t6_c3_redu_icms_cod');

  if (map.get('t6_c4_icms_subs_cod') !== undefined)
    vp.t6_c4_icms_subs_cod = map.get('t6_c4_icms_subs_cod');

  if (map.get('t6_c5_cof_subs_cod') !== undefined)
    vp.t6_c5_cof_subs_cod = map.get('t6_c5_cof_subs_cod');

  if (map.get('t6_c6_pis_subs_cod') !== undefined)
    vp.t6_c6_pis_subs_cod = map.get('t6_c6_pis_subs_cod');

  if (map.get('t6_recupera_pis') !== undefined)
    vp.t6_recupera_pis = map.get('t6_recupera_pis');

  if (map.get('t6_recupera_cof') !== undefined)
    vp.t6_recupera_cof = map.get('t6_recupera_cof');

  if (map.get('t6_tributa_pis') !== undefined)
    vp.t6_tributa_pis = map.get('t6_tributa_pis');

  if (map.get('t6_tributa_cof') !== undefined)
    vp.t6_tributa_cof = map.get('t6_tributa_cof');

  //Coluna 2
  if (map.get('t6_c7_s_p_ven_cod') !== undefined) {
    vp.t6_c7_s_p_ven_cod = map.get('t6_c7_s_p_ven_cod');
    vp.t6_c7_s_p_ven_des = map.get('t6_c7_s_p_ven_des');
  }

  if (map.get('t6_natureza_pis') !== undefined)
    vp.t6_natureza_pis = map.get('t6_natureza_pis');

  if (map.get('t6_c8_s_c_ven_cod') !== undefined) {
    vp.t6_c8_s_c_ven_cod = map.get('t6_c8_s_c_ven_cod');
    vp.t6_c8_s_c_ven_des = map.get('t6_c8_s_c_ven_des');
  }

  if (map.get('t6_natureza_cof') !== undefined)
    vp.t6_natureza_cof = map.get('t6_natureza_cof');

  if (map.get('t6_c9_enqua_cod') !== undefined)
    vp.t6_c9_enqua_cod = +map.get('t6_c9_enqua_cod');

  if (map.get('t6_c10_s_p_com_cod') !== undefined) {
    vp.t6_c10_s_p_com_cod = map.get('t6_c10_s_p_com_cod');
    vp.t6_c10_s_p_com_des = map.get('t6_c10_s_p_com_des');
  }

  if (map.get('t6_c11_s_c_com_cod') !== undefined) {
    vp.t6_c11_s_c_com_cod = map.get('t6_c11_s_c_com_cod');
    vp.t6_c11_s_c_com_des = map.get('t6_c11_s_c_com_des');
  }

  if (map.get('t6_produ_forne') !== undefined)
    vp.t6_produ_forne = map.get('t6_produ_forne');

  if (map.get('t6_funrural') !== undefined)
    vp.t6_funrural = +map.get('t6_funrural');

  if (map.get('t6_gilrat') !== undefined) vp.t6_gilrat = +map.get('t6_gilrat');

  //Coluna 3
  if (map.get('t6_senart') !== undefined) vp.t6_senart = +map.get('t6_senart');

  if (map.get('t6_c12_enqua_esp_cod') !== undefined) {
    vp.t6_c12_enqua_esp_cod = map.get('t6_c12_enqua_esp_cod');
    vp.t6_c12_enqua_esp_des = map.get('t6_c12_enqua_esp_des');
  }

  if (map.get('t6_c13_motivo_cod') !== undefined) {
    vp.t6_c13_motivo_cod = map.get('t6_c13_motivo_cod');
    vp.t6_c13_motivo_des = map.get('t6_c13_motivo_des');
  }

  if (map.get('t6_espe_subs_trub') !== undefined)
    vp.t6_espe_subs_trub = map.get('t6_espe_subs_trub');

  if (map.get('t6_anp_cod') !== undefined)
    vp.t6_anp_cod = +map.get('t6_anp_cod');

  if (map.get('t6_anp_des') !== undefined)
    vp.t6_anp_des = map.get('t6_anp_des');

  if (map.get('t6_pauta') !== undefined) vp.t6_pauta = map.get('t6_pauta');

  if (map.get('t6_benef') !== undefined) vp.t6_benef = map.get('t6_benef');

  //Coluna 4
  if (map.get('t6_observacoes') !== undefined)
    vp.t6_observacoes = map.get('t6_observacoes');

  if (map.get('t6_recusa') !== undefined) vp.t6_recusa = map.get('t6_recusa');

  if (map.get('t6_pasta_id') !== undefined)
    vp.t6_pasta_id = map.get('t6_pasta_id');

  return vp;
}

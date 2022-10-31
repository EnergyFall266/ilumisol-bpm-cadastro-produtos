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

  vp.t1_c1_c1_item_subs_cod = map.get('t1_c1_c1_item_subs_cod');

  vp.t1_c1_c2_similar_exi = map.get('t1_c1_c2_similar_exi');

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

  vp.t1_c2_c1_marca_cod = map.get('t1_c2_c1_marca_cod');
  vp.t1_c2_c1_marca_des = map.get('t1_c2_c1_marca_des');

  vp.t1_c2_c2_clafiscal_cod = map.get('t1_c2_c2_clafiscal_cod');
  vp.t1_c2_c2_clafiscal_des = map.get('t1_c2_c2_clafiscal_des');

  vp.t1_c2_c3_barras = map.get('t1_c2_c3_barras');

  vp.t1_c2_c3_barras_justificativa = map.get('t1_c2_c3_barras_justificativa');

  vp.t1_c2_c4_agrupamento_cod = map.get('t1_c2_c4_agrupamento_cod');
  vp.t1_c2_c4_agrupamento_des = map.get('t1_c2_c4_agrupamento_des');

  vp.t1_c2_especificacao = map.get('t1_c2_especificacao');

  vp.t1_c2_c5_mercadoria_cod = map.get('t1_c2_c5_mercadoria_cod');
  vp.t1_c2_c5_mercadoria_des = map.get('t1_c2_c5_mercadoria_des');

  vp.t1_c2_c6_integra_agrosys = map.get('t1_c2_c6_integra_agrosys');

  vp.t1_c2_c6_agrosys_cod = map.get('t1_c2_c6_agrosys_cod');

  vp.t1_c2_c7_multinivel_cod = map.get('t1_c2_c7_multinivel_cod');

  vp.t1_c3_vendido_upl = map.get('t1_c3_vendido_upl');

  return vp;
}

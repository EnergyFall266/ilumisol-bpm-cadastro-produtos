import { Message } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

export default function formValidate(vp: VP_BPM): Message[] {
  var m: Message[] = [];

  switch (STEP) {
    case environment.s1_sol_cad:
    case environment.s3_rev_inf:
    case environment.s5_rev_inf:
      if (vp.t1_c1_segmento == '')
        m.push(getMsgS('Dados básicos - Segmento de negócio'));

      if (vp.t1_c1_c1_substituto_cad == '')
        m.push(getMsgS('Dados básicos - Substituto de item já cadastrado?'));
      else if (
        vp.t1_c1_c1_substituto_cad == 'Sim' &&
        vp.t1_c1_c1_item_subs_cod == ''
      )
        m.push(getMsgS('Dados básicos - Código do item a ser substituído'));

      if (vp.t1_c1_c2_similar_exi == '')
        m.push(getMsgS('Dados básicos - Existe item similar?'));
      else if (
        vp.t1_c1_c2_similar_exi == 'Sim' &&
        vp.t1_c1_c2_item_simi_cod == ''
      )
        m.push(getMsgS('Dados básicos - Código do item simular'));

      if (vp.t1_c1_c3_origem_cod == '')
        m.push(getMsgS('Dados básicos - Origem'));

      if (vp.t1_c1_c4_familia_cod == '')
        m.push(getMsgS('Dados básicos - Família'));

      if (vp.t1_c1_descricao == '')
        m.push(getMsgC('Dados básicos - Descrição'));

      if (vp.t1_c1_c5_medida_cod == '')
        m.push(getMsgS('Dados básicos - Unidade de medida'));

      if (vp.t1_c1_cotado == '')
        m.push(getMsgS('Dados básicos - Produto será cotado?'));
      else if (vp.t1_c1_cotado == 'Não') {
        if (vp.t2_fornecedor_des == '')
          m.push(getMsgS('Dados do fornecedor - Fornecedor'));

        if (vp.t2_fornecedor_cod == '')
          m.push(getMsgC('Dados do fornecedor - Código produto fornecedor'));

        if (vp.t1_c2_c1_marca_cod == '')
          m.push(getMsgS('Dados básicos - Marca'));
      }

      if (vp.t1_c2_c2_clafiscal_cod == '')
        m.push(getMsgS('Dados básicos - Classificação fiscal'));

      if (vp.t1_c2_c3_barras == '') {
        m.push(getMsgC('Dados básicos - Código de barras livre'));
        if (vp.t1_c2_c3_barras_justificativa == '')
          m.push(getMsgC('Dados básicos - Justificativa código de barras'));
      }

      if (vp.t1_c2_c4_agrupamento_cod == '')
        m.push(getMsgS('Dados básicos - Agrupamento comercial'));

      if (vp.t1_c2_especificacao == '')
        m.push(getMsgC('Dados básicos - Especificação técnica'));

      if (vp.t1_c2_c5_mercadoria_cod == '')
        m.push(getMsgS('Dados básicos - Origem fiscal mercadoria'));

      if (vp.t1_c2_c6_integra_agrosys == '')
        m.push(getMsgS('Dados básicos - Integra agrosys?'));
      else if (
        vp.t1_c2_c6_integra_agrosys == 'Sim' &&
        vp.t1_c2_c6_agrosys_cod == ''
      )
        m.push(getMsgS('Dados básicos - Código agrosys'));

      if (vp.t3_c1_destino_cod == '')
        m.push(getMsgS('Dados de depósito - Depósitos destino'));

      if (vp.t3_c4_quan_mul_ven === undefined)
        m.push(getMsgC('Dados de depósito - Qtda. Múltipla vendas'));

      if (vp.t3_c4_quan_mul_com === undefined)
        m.push(getMsgC('Dados de depósito - Qtda. Múltipla para compras'));

      if (vp.t3_c1_quan_min_vendas === undefined)
        m.push(getMsgC('Dados de depósito - Qtda. mín. de vendas'));

      if (vp.t3_c2_quan_max_vendas === undefined)
        m.push(getMsgC('Dados de depósito - Qtda. max. de vendas'));

      if (vp.t1_c2_c7_multinivel_cod == '')
        m.push(getMsgS('Dados básicos - Código Agr. Apr. Multinível'));

      if (vp.t1_c3_vendido_upl == '')
        m.push(getMsgS('Dados básicos - Pode ser vendido UPL?'));

      if (vp.t1_c3_receita == '')
        m.push(getMsgS('Dados básicos - Emite receita agronômica?'));

      if (vp.t1_c3_c2_venda_virtual == '')
        m.push(getMsgS('Dados básicos - Venda virtual?'));

      if (vp.t1_c3_c2_venda_virtual == '')
        m.push(getMsgS('Dados básicos - Venda virtual?'));
      else if (vp.t1_c3_c2_venda_virtual == 'Sim') {
        if (vp.t1_c3_c2_categoria_cod == '')
          m.push(getMsgS('Dados básicos - Categoria de venda on-line'));

        if (vp.t1_c3_c2_subcategoria_cod == '')
          m.push(getMsgS('Dados básicos - Subcategoria de venda on-line'));
      }

      if (vp.t2_quantidade_multipla === undefined)
        m.push(getMsgC('Dados do fornecedor - Quantidade múltipla fornecedor'));

      if (vp.t2_quantidade_maxima === undefined)
        m.push(getMsgC('Dados do fornecedor - Quantidade máxima fornecedor'));

      if (vp.t2_quantidade_minima === undefined)
        m.push(getMsgC('Dados do fornecedor - Quantidade mínima fornecedor'));
      break;

    case environment.s2_dad_cad:
      if (vp.t5_c1_descricao == '')
        m.push(getMsgS('Dados do cadastro - Descrição p/nota fiscal'));

      if (vp.t5_c1_c1_mascara_cod == '')
        m.push(getMsgS('Dados do cadastro - Máscara Derivação'));
      break;

    case environment.s4_fis_con:
      if (vp.t6_c1_c1_tipo_prod_cod == '')
        m.push(
          getMsgS('Dados fiscais e contábeis - Tipo de produto para impostos')
        );

      if (vp.t6_c1_c3_pis_subs_cod == '')
        m.push(getMsgS('Dados fiscais e contábeis - Código Substituição Pis'));

      if (vp.t6_c1_pis_recu == '')
        m.push(getMsgS('Dados fiscais e contábeis - Recupera Pis'));

      if (vp.t6_c1_cof_recu == '')
        m.push(getMsgS('Dados fiscais e contábeis - Recupera Cofins'));

      if (vp.t6_c1_pis_trib == '')
        m.push(getMsgS('Dados fiscais e contábeis - Tributa Pis'));

      if (vp.t6_c1_cof_trib == '')
        m.push(getMsgS('Dados fiscais e contábeis - Tributa Cofins'));

      if (vp.t6_c2_c1_pis_ven_cod == '')
        m.push(
          getMsgS('Dados fiscais e contábeis - Situação Tributária Pis Vendas')
        );

      if (vp.t6_c2_c1_pis_nat_cod == '')
        m.push(getMsgS('Dados fiscais e contábeis - Natureza Receita Pis'));

      if (vp.t6_c2_c2_cof_ven_cod == '')
        m.push(
          getMsgS(
            'Dados fiscais e contábeis - Situação Tributária Cofins Vendas'
          )
        );

      if (vp.t6_c2_c2_cof_nat_cod == '')
        m.push(getMsgS('Dados fiscais e contábeis - Natureza Receita Cofins'));

      if (vp.t6_c2_c3_enqua_cod == '')
        m.push(getMsgS('Dados fiscais e contábeis - Código de enquadramento'));

      if (vp.t6_c2_c4_pis_com_cod == '')
        m.push(
          getMsgS('Dados fiscais e contábeis - Situação Tributária Pis Compras')
        );

      if (vp.t6_c2_c4_cof_com_cod == '')
        m.push(
          getMsgS(
            'Dados fiscais e contábeis - Situação Tributária Cofins Compras'
          )
        );

      if (vp.t6_c2_usa_pro_for == '')
        m.push(getMsgS('Dados fiscais e contábeis - Usa Produto x Fornecedor'));

      if (vp.t6_c2_funrural === undefined)
        m.push(getMsgC('Dados fiscais e contábeis - % Funrural'));

      if (vp.t6_c2_gilrat === undefined)
        m.push(getMsgC('Dados fiscais e contábeis - % Gilrat'));

      if (vp.t6_c3_senart === undefined)
        m.push(getMsgC('Dados fiscais e contábeis - % Senar / Senat'));

      if (vp.t6_c3_c1_enq_esp_cod == '')
        m.push(
          getMsgS(
            'Dados fiscais e contábeis - Enquadramento de produto específico'
          )
        );
      else if (vp.t6_c3_c1_enq_esp_des == 'Combustível') {
        if (vp.t6_c3_c3_anp_cod === undefined)
          m.push(getMsgC('Dados fiscais e contábeis - Código produto ANP'));

        if (vp.t6_c3_c3_anp_des == '')
          m.push(
            getMsgC('Dados fiscais e contábeis - Descrição produto na ANP')
          );
      }

      if (vp.t6_c3_cal_fun == '')
        m.push(getMsgS('Dados fiscais e contábeis - Calcula Funrural'));

      if (vp.t6_c3_cal_sen == '')
        m.push(getMsgS('Dados fiscais e contábeis - Calcula Senar'));
      break;

    default:
      break;
  }

  return m;
}

const getMsgC = (t: string): Message => ({
  severity: 'warn',
  summary: 'Campo obrigatório!',
  detail: t,
});

const getMsgS = (t: string): Message => ({
  severity: 'warn',
  summary: 'Seleção obrigatória!',
  detail: t,
});

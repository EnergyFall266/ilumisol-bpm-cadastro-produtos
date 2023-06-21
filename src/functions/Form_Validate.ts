import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

@Injectable({ providedIn: 'root' })
export default class FormValidate {
  constructor(private ms: MessageService) {}

  public salvarDados = (vp: VP_BPM) => {
    this.ms.clear();

    switch (STEP) {
      case environment.s1_sol_cad:
      case environment.s3_rev_inf:
      case environment.s5_rev_inf:
        if (vp.t1_c4_origem_cod == '')
          this.ms.add(getMsgS('Dados básicos - Origem'));

        if (vp.t1_c5_familia_cod == '')
          this.ms.add(getMsgS('Dados básicos - Família'));

        if (vp.t1_descricao_prod == '')
          this.ms.add(getMsgC('Dados básicos - Descrição'));

        if (vp.t1_c6_medida_cod == '')
          this.ms.add(getMsgS('Dados básicos - Unidade de medida'));

        if (vp.t1_cotado == '')
          this.ms.add(getMsgS('Dados básicos - Produto será cotado?'));
        else if (vp.t1_cotado == 'Não' && vp.t1_c1_marca_cod == '')
          this.ms.add(getMsgS('Dados básicos - Marca'));

        if (vp.t1_c3_clafiscal_cod == '')
          this.ms.add(getMsgS('Dados básicos - Classificação fiscal'));

        if (vp.t1_barras == '') {
          this.ms.add(getMsgC('Dados básicos - Código de barras livre'));
          if (
            vp.t1_barras_just == '' ||
            vp.t1_barras_just == 'SEM GTIN'
          )
            this.ms.add(
              getMsgC('Dados básicos - Justificativa código de barras')
            );
        }

        if (vp.t1_especificacao == '')
          this.ms.add(getMsgC('Dados básicos - Especificação técnica'));

        if (vp.t3_c1_destino_cod == '')
          this.ms.add(getMsgS('Dados de depósito - Depósitos destino'));

        if (vp.t3_c4_quan_mul_ven === undefined)
          this.ms.add(getMsgC('Dados de depósito - Qtda. Múltipla vendas'));

        if (vp.t3_c4_quan_mul_com === undefined)
          this.ms.add(
            getMsgC('Dados de depósito - Qtda. Múltipla para compras')
          );

        if (vp.t3_c1_quan_min_vendas === undefined)
          this.ms.add(getMsgC('Dados de depósito - Qtda. mín. de vendas'));

        if (vp.t3_c2_quan_max_vendas === undefined)
          this.ms.add(getMsgC('Dados de depósito - Qtda. max. de vendas'));

        if (vp.t2_fornecedor_cod == -1)
          this.ms.add(getMsgS('Dados do fornecedor - Fornecedor'));

        if (vp.t2_produto_fornecedor == '')
          this.ms.add(
            getMsgC('Dados do fornecedor - Código produto fornecedor')
          );

        if (vp.t2_quantidade_multipla === undefined)
          this.ms.add(
            getMsgC('Dados do fornecedor - Quantidade múltipla fornecedor')
          );

        if (vp.t2_quantidade_maxima === undefined)
          this.ms.add(
            getMsgC('Dados do fornecedor - Quantidade máxima fornecedor')
          );

        if (vp.t2_quantidade_minima === undefined)
          this.ms.add(
            getMsgC('Dados do fornecedor - Quantidade mínima fornecedor')
          );
        break;

      case environment.s2_dad_cad:
        if (vp.t1_descricao_fiscal == '')
          this.ms.add(getMsgS('Dados do cadastro - Descrição p/nota fiscal'));

        if (vp.t5_c1_c1_mascara_cod == '')
          this.ms.add(getMsgS('Dados do cadastro - Máscara Derivação'));
        break;

      case environment.s4_fis_con:
        if (vp.t6_c1_c1_tipo_prod_cod == -1)
          this.ms.add(
            getMsgS('Dados fiscais e contábeis - Tipo de produto para impostos')
          );

        if (vp.t6_c1_pis_recu == '')
          this.ms.add(getMsgS('Dados fiscais e contábeis - Recupera Pis'));

        if (vp.t6_c1_cof_recu == '')
          this.ms.add(getMsgS('Dados fiscais e contábeis - Recupera Cofins'));

        if (vp.t6_c1_pis_trib == '')
          this.ms.add(getMsgS('Dados fiscais e contábeis - Tributa Pis'));

        if (vp.t6_c1_cof_trib == '')
          this.ms.add(getMsgS('Dados fiscais e contábeis - Tributa Cofins'));

        if (vp.t6_c2_c1_pis_ven_cod == '')
          this.ms.add(
            getMsgS(
              'Dados fiscais e contábeis - Situação Tributária Pis Vendas'
            )
          );

        if (vp.t6_c2_c1_pis_nat_cod === undefined)
          this.ms.add(
            getMsgS('Dados fiscais e contábeis - Natureza Receita Pis')
          );

        if (vp.t6_c2_c2_cof_ven_cod == '')
          this.ms.add(
            getMsgS(
              'Dados fiscais e contábeis - Situação Tributária Cofins Vendas'
            )
          );

        if (vp.t6_c2_c2_cof_nat_cod === undefined)
          this.ms.add(
            getMsgS('Dados fiscais e contábeis - Natureza Receita Cofins')
          );

        if (vp.t6_c2_c4_pis_com_cod == '')
          this.ms.add(
            getMsgS(
              'Dados fiscais e contábeis - Situação Tributária Pis Compras'
            )
          );

        if (vp.t6_c2_c4_cof_com_cod == '')
          this.ms.add(
            getMsgS(
              'Dados fiscais e contábeis - Situação Tributária Cofins Compras'
            )
          );

        if (vp.t6_c2_usa_pro_for == '')
          this.ms.add(
            getMsgS('Dados fiscais e contábeis - Usa Produto x Fornecedor')
          );

        if (vp.t6_c2_funrural === undefined)
          this.ms.add(getMsgC('Dados fiscais e contábeis - % Funrural'));

        if (vp.t6_c2_gilrat === undefined)
          this.ms.add(getMsgC('Dados fiscais e contábeis - % Gilrat'));

        if (vp.t6_c3_senart === undefined)
          this.ms.add(getMsgC('Dados fiscais e contábeis - % Senar / Senat'));

        if (vp.t6_c3_c1_enq_esp_cod == -1)
          this.ms.add(
            getMsgS(
              'Dados fiscais e contábeis - Enquadramento de produto específico'
            )
          );
        else if (vp.t6_c3_c1_enq_esp_des == 'Combustível') {
          if (vp.t6_c3_c3_anp_cod === undefined)
            this.ms.add(
              getMsgC('Dados fiscais e contábeis - Código produto ANP')
            );

          if (vp.t6_c3_c3_anp_des == '')
            this.ms.add(
              getMsgC('Dados fiscais e contábeis - Descrição produto na ANP')
            );
        }

        if (vp.t6_c3_cal_fun == '')
          this.ms.add(getMsgS('Dados fiscais e contábeis - Calcula Funrural'));

        if (vp.t6_c3_cal_sen == '')
          this.ms.add(getMsgS('Dados fiscais e contábeis - Calcula Senar'));
        break;

      case environment.s6_gra_pro:
        if (vp.c7_mensagem_retorno == '')
          this.ms.add({
            severity: 'warn',
            summary: 'Deve cadastrar o produto para continuar!',
          });
        break;

      default:
        break;
    }
  };
}

const getMsgC = (t: string): Message => ({
  severity: 'warn',
  summary: 'Campo obrigatório!',
  detail: t,
  life: 5000
});

const getMsgS = (t: string): Message => ({
  severity: 'warn',
  summary: 'Seleção obrigatória!',
  detail: t,
  life: 5000
});

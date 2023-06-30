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
        if (vp.c1_empresa_cod == -1)
          this.ms.add(getMsgS('Seleciona uma empresa para continuar'));
        else {
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
            if (vp.t1_barras_just == '' || vp.t1_barras_just == 'SEM GTIN')
              this.ms.add(
                getMsgC('Dados básicos - Justificativa código de barras')
              );
          }

          if (vp.t1_altura === undefined)
            this.ms.add(getMsgS('Dados do básicos - Altura / Espessura'));

          if (vp.t1_largura === undefined)
            this.ms.add(getMsgS('Dados do básicos - Largura'));

          if (vp.t1_comprimento === undefined)
            this.ms.add(getMsgS('Dados do básicos - Comprimento'));

          if (vp.t1_valor_aprox === undefined)
            this.ms.add(getMsgS('Dados do básicos - Valor aprox. do item'));

          if (vp.t1_aplicacao === undefined)
            this.ms.add(getMsgS('Dados do básicos - Aplicação'));

          if (vp.t1_comp_trata === undefined)
            this.ms.add(getMsgS('Dados do básicos - Composição Tratamento'));

          if (vp.t1_controlado === undefined)
            this.ms.add(
              getMsgS('Dados do básicos - Produto vai ter estoque controlado?')
            );

          //
          if (vp.t3_c1_destino_cod == '')
            this.ms.add(getMsgS('Dados de depósito - Depósitos destino'));

          if (vp.t3_qtde_mul_ven === undefined)
            this.ms.add(getMsgC('Dados de depósito - Qtde. Múltipla vendas'));

          if (vp.t3_qtde_mul_com === undefined)
            this.ms.add(
              getMsgC('Dados de depósito - Qtde. Múltipla para compras')
            );

          if (vp.t3_qtde_min_vendas === undefined)
            this.ms.add(getMsgC('Dados de depósito - Qtde. mín. de vendas'));

          if (vp.t3_qtde_max_vendas === undefined)
            this.ms.add(getMsgC('Dados de depósito - Qtde. max. de vendas'));

          //
          if (vp.t2_c1_fornecedor_cod == -1)
            this.ms.add(getMsgS('Dados do fornecedor - Fornecedor'));

          if (vp.t2_produto_fornecedor_cod == '')
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
        }
        break;

      case environment.s2_dad_cad:
        if (vp.t1_descricao_fiscal == '')
          this.ms.add(getMsgS('Dados do cadastro - Descrição p/nota fiscal'));

        if (vp.t5_c1_mascara_cod == '')
          this.ms.add(getMsgS('Dados do cadastro - Máscara Derivação'));
        break;

      case environment.s6_fis_con:
        break;

      case environment.s6_fis_con:
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

  public cadastrarProduto = (vp: VP_BPM) => {
    if (vp.t6_c1_impostos_cod == -1)
      this.ms.add(
        getMsgS('Dados fiscais e contábeis - Tipo de produto para impostos')
      );

    if (vp.t6_recupera_pis == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Recupera Pis'));

    if (vp.t6_recupera_cof == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Recupera Cofins'));

    if (vp.t6_tributa_pis == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Tributa Pis'));

    if (vp.t6_tributa_cof == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Tributa Cofins'));

    if (vp.t6_c7_s_p_ven_cod == '')
      this.ms.add(
        getMsgS('Dados fiscais e contábeis - Situação Tributária Pis Vendas')
      );

    if (vp.t6_natureza_pis === undefined)
      this.ms.add(getMsgS('Dados fiscais e contábeis - Natureza Receita Pis'));

    if (vp.t6_c8_s_c_ven_cod == '')
      this.ms.add(
        getMsgS('Dados fiscais e contábeis - Situação Tributária Cofins Vendas')
      );

    if (vp.t6_natureza_cof === undefined)
      this.ms.add(
        getMsgS('Dados fiscais e contábeis - Natureza Receita Cofins')
      );

    if (vp.t6_c10_s_p_com_cod == '')
      this.ms.add(
        getMsgS('Dados fiscais e contábeis - Situação Tributária Pis Compras')
      );

    if (vp.t6_c11_s_c_com_cod == '')
      this.ms.add(
        getMsgS(
          'Dados fiscais e contábeis - Situação Tributária Cofins Compras'
        )
      );

    if (vp.t6_produ_forne == '')
      this.ms.add(
        getMsgS('Dados fiscais e contábeis - Usa Produto x Fornecedor')
      );

    if (vp.t6_c12_enqua_esp_cod == -1)
      this.ms.add(
        getMsgS(
          'Dados fiscais e contábeis - Enquadramento de produto específico'
        )
      );
    else if (vp.t6_c12_enqua_esp_des == 'Combustível') {
      if (vp.t6_anp_cod === undefined)
        this.ms.add(getMsgC('Dados fiscais e contábeis - Código produto ANP'));

      if (vp.t6_anp_des == '')
        this.ms.add(
          getMsgC('Dados fiscais e contábeis - Descrição produto na ANP')
        );
    }
  };
}

const getMsgC = (t: string): Message => ({
  severity: 'warn',
  summary: 'Campo obrigatório!',
  detail: t,
  life: 5000,
});

const getMsgS = (t: string): Message => ({
  severity: 'warn',
  summary: 'Seleção obrigatória!',
  detail: t,
  life: 5000,
});

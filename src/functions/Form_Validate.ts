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
          if (vp.t1_descricao_prod == '')
            this.ms.add(getMsgC('Dados básicos - Descrição'));

          if (vp.t1_descricao_fiscal == '')
            this.ms.add(getMsgS('Dados básicos - Descrição p/nota fiscal'));

          if (vp.t1_c1_marca_chk() && vp.t1_c1_marca_cod == '')
            this.ms.add(getMsgS('Dados básicos - Origem'));

          if (vp.t1_c15_impostos_cod == -1)
            this.ms.add(
              getMsgS('Dados básicos - Tipo de produto para impostos')
            );

          if (vp.t1_c2_substituto_cad == '')
            this.ms.add(
              getMsgS('Dados básicos - Substituto de item já cadastrado?')
            );
          else if (
            vp.t1_c2_substituto_cad == 'Sim' &&
            vp.t1_c2_substituto_cod == ''
          )
            this.ms.add(
              getMsgS('Dados básicos - Código do item a ser substituido')
            );

          if (vp.t1_cotado == '')
            this.ms.add(getMsgS('Dados básicos - Produto será cotado?'));

          if (vp.t1_controlado == '')
            this.ms.add(
              getMsgS('Dados básicos - Produto vai ter estoque controlado?')
            );

          if (vp.t1_aquisicao == '')
            this.ms.add(getMsgS('Dados básicos - Origem da aquisição'));

          if (vp.t1_c3_clafiscal_cod == '')
            this.ms.add(getMsgS('Dados básicos - Classificação fiscal / NCM'));

          if (vp.t1_valor_aprox === undefined)
            this.ms.add(getMsgS('Dados básicos - Valor aprox. do item'));

          if (vp.t1_c5_familia_cod == '')
            this.ms.add(getMsgS('Dados básicos - Família'));

          if (vp.t1_c6_medida_cod == '')
            this.ms.add(getMsgS('Dados básicos - Unidade de medida Estoque'));

          if (vp.t1_c7_mercadoria_cod == '')
            this.ms.add(getMsgS('Dados básicos - Origem fiscal mercadoria'));

          if (vp.t1_c12_destino_cod == '')
            this.ms.add(getMsgS('Dados básicos - Depósitos destino'));

          if (vp.t1_c16_enqua_esp_cod == -1)
            this.ms.add(
              getMsgS('Dados básicos - Enquadramento de produto específico')
            );
          else if (vp.t1_c16_enqua_esp_des == 'Combustível') {
            if (vp.t1_anp_cod === undefined)
              this.ms.add(getMsgC('Dados básicos - Código produto ANP'));

            if (vp.t1_anp_des == '')
              this.ms.add(getMsgC('Dados básicos - Descrição produto na ANP'));
          }

          if (vp.t1_aplicacao === undefined)
            this.ms.add(getMsgS('Dados básicos - Aplicação'));

          if (vp.t1_comp_trata === undefined)
            this.ms.add(getMsgS('Dados básicos - Composição Tratamento'));

          if (vp.t1_altura === undefined)
            this.ms.add(getMsgS('Dados básicos - Altura / Espessura'));
          else if (vp.t1_altura_tipo == '')
            this.ms.add(
              getMsgS('Dados básicos - Altura / Espessura tipo de medida')
            );

          if (vp.t1_largura === undefined)
            this.ms.add(getMsgS('Dados básicos - Largura'));
          else if (vp.t1_largura_tipo == '')
            this.ms.add(getMsgS('Dados básicos - Largura tipo de medida'));

          if (vp.t1_comprimento === undefined)
            this.ms.add(getMsgS('Dados básicos - Comprimento'));
          else if (vp.t1_comprimento_tipo == '')
            this.ms.add(getMsgS('Dados básicos - Comprimento tipo de medida'));

          if (vp.t1_peso_bruto === undefined)
            this.ms.add(getMsgS('Dados básicos - Peso Bruto'));

          if (vp.t1_peso_liquido === undefined)
            this.ms.add(getMsgS('Dados básicos - Peso Líquido'));

          if (vp.t1_c13_file_TS.length == 0)
            this.ms.add(
              getMsgS('Dados básicos - Deve inserir pelo menos um anexo')
            );
        }
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
    this.ms.clear();

    if (vp.t6_c15_regi_trib_cod == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Regime Tributário'));

    if (vp.t6_tem_icms == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Tem ICMS'));

    if (vp.t6_recupera_icms == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Recupera ICMS'));

    if (vp.t6_recupera_pis == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Recupera Pis'));

    if (vp.t6_recupera_cof == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Recupera Cofins'));

    if (vp.t6_tributa_pis == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Tributa Pis'));

    if (vp.t6_tributa_cof == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Tributa Cofins'));

    if (vp.t6_c16_situ_trib_cod == '')
      this.ms.add(getMsgS('Dados fiscais e contábeis - Situação Tributária'));

    if (vp.t6_c7_s_p_ven_cod == '')
      this.ms.add(
        getMsgS('Dados fiscais e contábeis - Situação Tributária Pis Vendas')
      );

    if (vp.t6_c8_s_c_ven_cod == '')
      this.ms.add(
        getMsgS('Dados fiscais e contábeis - Situação Tributária Cofins Vendas')
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

    if (vp.t6_c17_s_i_com_cod == '')
      this.ms.add(
        getMsgS('Dados fiscais e contábeis - Situação Tributária Ipi Compras')
      );
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

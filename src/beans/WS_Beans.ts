import { AxiosRequestConfig } from 'axios';

export const axios_header_token: AxiosRequestConfig<string> = {
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
};

export interface Item {}

export interface Origem {}

export interface Familia {
  codFam: string;
  desFam: string;
  codOri: string;
}

export interface UnidadeMedida {}

export interface Marca {}

export interface ClassificacaoFiscal {}

export interface AgrupamentoComercial {}

export interface OrigemFiscalMercadoria {}

export interface Agrosys {}

export interface AgrAprMultinivel {}

export interface CategoriaVenda {}

export interface GrupoQuimico {}

export interface Fornecedor {}

export interface Deposito {}

export interface MascaraDerivacao {}

export interface AgrupEstoques {}

export interface AgrupCustos {}

export interface TipoConversao {}

export interface TipoProduto {}

export interface ICMS {}

export interface ReducaoICMS {}

export interface Cofins {}

export interface Pis {}

export interface SituacaoTributaria {}

export interface NaturezaReceita {}

export interface Enquadramento {}

export interface Desoneracao {}

export interface PautaFiscal {}

export interface CBenef {}

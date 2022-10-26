import { AxiosRequestConfig } from 'axios';

export const ws_beans_header: AxiosRequestConfig<string> = {
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
};

export interface G5Response {
  msgRet: string;
  erroExecucao?: ErroExecucao;
  produtos?:
    | ExportaProdutos[]
    | ExportaProdutos
    | ExportaProAgs[]
    | ExportaProAgs;
  origens?: ExportaOrigens[] | ExportaOrigens;
  familias?: ExportaFamilias[] | ExportaFamilias;
  unidadesMedida?: ExportaUniMeds[] | ExportaUniMeds;
  fornecedores?: ExportaFornecedores[] | ExportaFornecedores;
  marcas?: ExportaMarcas[] | ExportaMarcas;
  classificacoes?: ExportaClaFis[] | ExportaClaFis;
  agrupamentos?: ExportaAgrupamentos[] | ExportaAgrupamentos;
  lista?: ExportaValorLista[] | ExportaValorLista;
  depositos?: ExportaDepositos[] | ExportaDepositos;
  categorias?: ExportaCategorias[] | ExportaCategorias;
  subCategorias?: ExportaSubCategorias[] | ExportaSubCategorias;
  grupos?: ExportaGrupoQuimico[] | ExportaGrupoQuimico;
  mascaras?: ExportaMascaraDerivacao[] | ExportaMascaraDerivacao;
  ICMS?: ExportaICMSEsp[] | ExportaICMSEsp;
  reducao?: ExportaReducaoICMS[] | ExportaReducaoICMS;
  substituicoes?: ExportaSubstituicao[] | ExportaSubstituicao;
}

export interface ExportaProdutos {
  codPro: string;
  desPro: string;
}

export interface ExportaOrigens {
  codOri: string;
  desOri: string;
}

export interface ExportaFamilias {
  codFam: string;
  desFam: string;
  codOri: string;
}

export interface ExportaUniMeds {
  uniMed: string;
  desMed: string;
}

export interface ExportaFornecedores {
  codFor: string;
  NomFor: string;
}

export interface ExportaMarcas {
  codMar: string;
  NomMar: string;
}

export interface ExportaClaFis {
  fiscal: string;
  desClf: string;
}

export interface ExportaAgrupamentos {
  codAgp: string;
  desAgp: string;
}

export interface ExportaValorLista {
  ChvLis: string;
  desLis: string;
}

export interface ExportaProAgs {
  proAgs: string;
}

export interface ExportaDepositos {
  codDep: string;
  desDep: string;
}

export interface ExportaCategorias {
  codCtg: string;
  desCtg: string;
}

export interface ExportaSubCategorias {
  codSct: string;
  desSct: string;
}

export interface ExportaGrupoQuimico {
  codQui: string;
  desQui: string;
}

export interface ExportaMascaraDerivacao {
  codMdp: string;
  desMdp: string;
}

export interface ExportaICMSEsp {
  codTic: string;
  desTic: string;
}

export interface ExportaReducaoICMS {
  codTrd: string;
  desTrd: string;
}

export interface ExportaSubstituicao {
  codTst: string;
  desTst: string;
}

export interface NaturezaReceita {}

export interface PautaFiscal {}

export interface CBenef {}

export interface ErroExecucao {
  'xsi:nil': boolean;
  'xmlns:xsi': string;
}

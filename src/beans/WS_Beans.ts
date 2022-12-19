import { AxiosRequestConfig } from 'axios';

export const ws_beans_header: AxiosRequestConfig<string> = {
  headers: {
    user: 'weliton.ribeiro',
    pass: 'S@p1ens',
    encryptionType: '0',
    Authorization: '',
    'Content-Type': 'application/json',
  },
};

export interface G5Response {
  codRet?: number;
  msgRet?: string;
  erroExecucao?: ErroExecucao;

  produtos?: ExportaProdutos[] | ExportaProdutos;
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
  classes?:
    | ExportaClasseToxicologica[]
    | ExportaClasseToxicologica
    | ExportaClasseRisco[]
    | ExportaClasseRisco;
  grupos?: ExportaGrupoQuimico[] | ExportaGrupoQuimico;
  mascaras?: ExportaMascaraDerivacao[] | ExportaMascaraDerivacao;
  ICMS?: ExportaICMSEsp[] | ExportaICMSEsp;
  reducao?: ExportaReducaoICMS[] | ExportaReducaoICMS;
  substituicoes?: ExportaSubstituicao[] | ExportaSubstituicao;
  enquadramentos?: ExportaEnquadramento[] | ExportaEnquadramento;

  produto?: Produto | Produto[];

  errorType?: string;
  errorMessage?: string;
  stackTrace?: string;
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
  codFor: number;
  nomFor: string;
}

export interface ExportaMarcas {
  codMar: string;
  nomMar: string;
}

export interface ExportaClaFis {
  codClf: string;
  desClf: string;
}

export interface ExportaAgrupamentos {
  codAgp: string;
  desAgp: string;
}

export interface ExportaValorLista {
  chvLis: string;
  desLis: string;
}

export interface ExportaDepositos {
  codDep: string;
  desDep: string;
}

export interface ExportaCategorias {
  codCtg: number;
  desCtg: string;
}

export interface ExportaSubCategorias {
  codSct: number;
  desSct: string;
  codCtg: number;
}

export interface ExportaGrupoQuimico {
  codQui: number;
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

export interface ExportaEnquadramento {
  codEnq: number;
  enqDsc: string;
}

export interface ExportaClasseToxicologica {
  codCto: number;
  desCto: string;
  claCto: string;
}

export interface ExportaClasseRisco {
  codCri: string;
  desCri: string;
}

interface ErroExecucao {
  'xsi:nil': boolean;
  'xmlns:xsi': string;
}

export interface CadastroRoot {
  produto: Produto;
}

interface Produto {
  codOri?: string;
  codFam?: string;
  desPro?: string;
  uniMed?: string;
  codMar?: string;
  codClf?: string;
  codAgc?: string;
  oriMer?: string;
  intAgs?: string;
  proAgs?: string;
  qtdMve?: number;
  qtdMlt?: number;
  qtdMin?: number;
  qtdMax?: number;
  codAga?: string;
  indReq?: string;
  indVen?: string;
  indCpr?: string;
  indOct?: string;
  proUpl?: string;
  emiRec?: string;
  venVir?: string;
  codCtg?: number;
  codSct?: number;
  nroOnu?: string;
  codCto?: number;
  codCri?: string;
  codNri?: string;
  nroMap?: string;
  codQui?: number;
  desNfv?: string;
  codMdp?: string;
  codAge?: string;
  codAgu?: string;
  uniMe2?: string;
  uniMe3?: string;
  pesBru?: number;
  pesLiq?: number;
  proImp?: number;
  codTic?: string;
  codTrd?: string;
  codTst?: string;
  codStc?: string;
  codStp?: string;
  recPis?: string;
  recCof?: string;
  triPis?: string;
  triCof?: string;
  cstPis?: string;
  natPis?: number;
  cstCof?: string;
  natCof?: number;
  codEnq?: number;
  cstPic?: string;
  cstCoc?: string;
  indFpr?: string;
  perFun?: number;
  perGil?: number;
  perSen?: number;
  proEpe?: number;
  motDes?: number;
  codCes?: string;
  codAnp?: number;
  desAnp?: string;
  calFun?: string;
  calSen?: string;
  claPro?: number;
  tipPro?: string;
  numOri?: number;
  derivacao?: Derivacao[];
  ligProFor?: LigProFor[];
  ligProDep?: LigProDep[];
  msgRetorno?: string;
  retorno?: Retorno;
}

interface Derivacao {
  codBar?: string | number;
  tipCn2?: string;
  vlrCn2?: number;
  tipCn3?: string;
  vlrCn3?: number;
}

interface LigProFor {
  codFor?: number;
  proFor?: string;
  qtdMlt?: number;
  qtdMax?: number;
  qtdMin?: number;
  recIpi?: string;
  recIcm?: string;
}

interface LigProDep {
  codDep?: string;
  estRep?: number;
  estMin?: number;
  estMax?: number;
  estMid?: number;
  estMad?: number;
}

interface Retorno {
  codDer?: string;
  desRet?: string;
  codEmp?: number;
  codPro?: string | number;
}

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
  codEmp: number;
  codFam: string;
  desFam: string;
  tipPro: string;
  codOri: string;
  depPad: string;
  ctrVld: string;
  ctrLot: string;
  ctrSep: string;
  posPro: number;
  codMdp: string;
  uniMed: string;
  uniMe2: string;
  uniMe3: string;
  utiDec: string;
  qtdDec: number;
  codEt1: number;
  codEt2: number;
  codEt3: number;
  codEt4: number;
  codEt5: number;
  codEt6: number;
  codEt7: number;
  codEt8: number;
  codEt9: number;
  temCte: string;
  numOri: number;
  qtdMlt: number;
  qtdMin: number;
  qtdMax: number;
  qtdGop: number;
  bxaOrp: string;
  codAge: string;
  codAgp: string;
  codAgu: string;
  codAgc: string;
  codAgt: string;
  codAgf: string;
  codClf: string;
  codStr: string;
  recIpi: string;
  recCof: string;
  temIcm: string;
  codTic: string;
  codTrd: string;
  codTst: string;
  codStp: string;
  codStc: string;
  recIcm: string;
  gerEan: string;
  codMp1: string;
  codMp2: string;
  codMp3: string;
  codMp4: string;
  codMp5: string;
  codMp6: string;
  codMp7: string;
  rotPro: string;
  matDir: string;
  codReg: number;
  codNtg: number;
  criRat: number;
  ctaRed: number;
  ctaRcr: number;
  ctaFdv: number;
  ctaFcr: number;
  ctaDcd: number;
  ctaDci: number;
  indKit: string;
  codPin: string;
  notFor: number;
  indMis: string;
  emiGtr: string;
  somIim: string;
  recPis: string;
  indExp: number;
  datPal: string;
  horPal: number;
  tipInt: number;
  somIil: string;
  codMar: string;
  codClc: string;
  nivCbn: number;
  sitCal: string;
  gerOrp: string;
  perIrf: number;
  perPis: number;
  perCof: number;
  perCsl: number;
  perOur: number;
  somIps: string;
  somIco: string;
  somIpl: string;
  somIcl: string;
  indOct: string;
  indSpr: string;
  preCus: number;
  sitFam: string;
  proImp: number;
  usuGer: number;
  datGer: string;
  horGer: number;
  usuAlt: number;
  datAlt: string;
  horAlt: number;
  intAgr: string;
  ctrVis: string;
  datVis: string;
  horVis: number;
  diaRep: number;
  indFrt: string;
  frtEqp: string;
  grpFrt: string;
  cstIpi: string;
  cstPis: string;
  cstCof: string;
  cstIpc: string;
  cstPic: string;
  cstCoc: string;
  varPro: string;
  proMon: string;
  finCrp: number;
  finCdp: number;
  perPim: number;
  perCim: number;
  aplAtx: string;
  codAtx: number;
  indIcp: string;
  mgcMin: number;
  mgcLim: number;
  perVen: number;
  preRef: number;
  codBic: string;
  indVol: string;
  codMph: number;
  modFab: string;
  tipFte: string;
  codPri: string;
  codPrc: string;
  camposUsuario: CamposUsuario;
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

export interface Destino {}

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

interface CamposUsuario {
  valor?: string;
  campo?: string;
}

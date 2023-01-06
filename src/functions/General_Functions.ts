export const roundNumero5 = (n: number): number =>
  Math.round((n + Number.EPSILON) * 100000) / 100000;

export const roundNumero2 = (n: number): number =>
  Math.round((n + Number.EPSILON) * 100) / 100;

export const formatarNumero = (n: number): string =>
  roundNumero2(n).toLocaleString('pt-br', { minimumFractionDigits: 2 });

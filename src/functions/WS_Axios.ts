import axios, { AxiosResponse } from 'axios';
import { Message } from 'primeng/api';
import * as wsb from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';

const URL = environment.url_padrao;

export const wsG5Exporta = async (port: string, body: string = '{}') =>
  (
    await axios.post<
      AxiosResponse<wsb.G5Response>,
      AxiosResponse<wsb.G5Response>
    >(
      `${URL}/SXI/G5Rest?server=${URL}&module=sapiens&service=com.prisma.bpm&port=${port}&useAlwaysArray=true`,
      body,
      wsb.ws_beans_header
    )
  ).data;

export const wsG5Cadastro = async (body: string) => {
  const r: { suc: wsb.G5Response; msg?: Message[] } = { suc: {} };

  await axios
    .post<AxiosResponse<wsb.G5Response>, AxiosResponse<wsb.G5Response>>(
      `${URL}/SXI/G5Rest?server=${URL}&module=sapiens&service=com.prisma.bpm&port=CadastroProduto&useAlwaysArray=true`,
      body,
      wsb.ws_beans_header
    )
    .then((x) => (r.suc = x.data))
    .catch((e) => {
      r.msg = [
        {
          severity: 'error',
          summary: 'Web service cadastro',
          detail: (e.response.data as wsb.G5Response).errorMessage ?? '',
        },
      ];
    });

  return r;
};

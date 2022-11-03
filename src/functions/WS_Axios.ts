import axios, { AxiosResponse } from 'axios';
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

export const wsGetNextProcessInstanceId = async () =>
  (
    await axios.get<
      AxiosResponse<{ processInstanceID: number }>,
      AxiosResponse<{ processInstanceID: number }>
    >(
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/workflow/queries/getNextProcessInstanceId',
      wsb.ws_beans_header
    )
  ).data.processInstanceID;

export const wsG5Cadastro = async (body: string) =>
  (
    await axios.post<
      AxiosResponse<wsb.G5Response>,
      AxiosResponse<wsb.G5Response>
    >(
      `${URL}/SXI/G5Rest?server=${URL}&module=sapiens&service=com.prisma.bpm&port=CadastroProduto&useAlwaysArray=true`,
      body,
      wsb.ws_beans_header
    )
  ).data;

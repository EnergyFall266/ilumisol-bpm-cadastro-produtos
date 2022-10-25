import axios from 'axios';
import * as wsb from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';

const URL = environment.urlpadrao;

export const wsG5Exporta = async (port: string, body: string = '{}') =>
  await axios.post<wsb.G5Response, wsb.G5Response>(
    `${URL}/SXI/G5Rest?server=${URL}&module=sapiens&service=com.prisma.bpm&port=${port}&useAlwaysArray=true`,
    body,
    wsb.ws_beans_header
  );

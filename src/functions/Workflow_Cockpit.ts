import { AppService } from 'src/app/app.service';
import { ResponseLoadData, VP_BPM } from 'src/beans/VP_BPM';
import { Info } from 'src/beans/Workflow';
import { ws_beans_header } from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';
import getFormPresentation from './Form_Presentation';
import getVP from './Get_VP_BPM';

const STEP = environment.tarefa();
const ap: AppService = new AppService();

declare var removeData: any;
declare var rollbackData: any;

export async function loadData(vp: VP_BPM, info: Info) {
  var rld: ResponseLoadData = { initial: 1, tabs: [1, 2, 3], vp };

  rld.vp.user_fullname = (await info.getUserData()).fullname;

  const ptd = await info.getPlatformData();
  rld.vp.token = `bearer ${ptd.token.access_token}`;
  ws_beans_header.headers!['Authorization'] = rld.vp.token;

  const ipv = await info.getInfoFromProcessVariables();
  if (STEP !== environment.s1_sol_cad) {
    var map: Map<any, any> = new Map();
    for (let i of ipv) map.set(i.key, i.value);
    rld.vp = getVP(rld.vp, map);
  }
  rld = getFormPresentation(rld);

  rld.vp = await ap.getAllDocs(rld.vp);

  return rld;
}

export async function saveData(vp: VP_BPM) {
  switch (STEP) {
    case environment.s2_dad_cad:
      if (vp.t5_c3_c2_anexo_files.length > 0) vp = await ap.enviarDocs(vp, 'c');
      break;
    case environment.s4_fis_con:
      if (vp.t6_c4_c2_anexo_files.length > 0) vp = await ap.enviarDocs(vp, 'f');
      break;
    default:
      if (vp.t4_anexo_files.length > 0) vp = await ap.enviarDocs(vp, 's');
      break;
  }

  return { formData: vp };
}

export function rollback(data: any, info: any) {
  if (info.isRequestNew()) return removeData(data.processInstanceId);
  return rollbackData(data.processInstanceId);
}

import { AppService } from 'src/app/app.service';
import { ResponseLoadData, VP_BPM } from 'src/beans/VP_BPM';
import { Info } from 'src/beans/Workflow';
import { ws_beans_header } from 'src/beans/WS_Beans';
import { environment } from 'src/environments/environment';
import getFormPresentation from './Form_Presentation';
import getVP from './Get_VP_BPM';

const STEP = environment.tarefa();

declare var removeData: any;
declare var rollbackData: any;

async function loadData(vp: VP_BPM, info: Info): Promise<ResponseLoadData> {
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

  const ap: AppService = new AppService();
  /*rld.vp = await getAllDocuments(rld.vp);*/

  return rld;
}

async function saveData(vp: VP_BPM): Promise<any> {
  const ap: AppService = new AppService();

  switch (STEP) {
    case environment.s1_sol_cad:
    case environment.s3_rev_inf:
      await ap.enviarDocumentos(
        vp,
        vp.t4_anexo_pasta_nome,
        vp.t4_anexo_pasta_id,
        vp.t4_anexo_files,
        vp.t4_anexo_ged_arr
      );
      break;
    case environment.s2_dad_cad:
      await ap.enviarDocumentos(
        vp,
        vp.t5_c3_c2_anexo_pasta_nome,
        vp.t5_c3_c2_anexo_pasta_id,
        vp.t5_c3_c2_anexo_files,
        vp.t5_c3_c2_anexo_ged_arr
      );
      break;
    case environment.s4_fis_con:
      await ap.enviarDocumentos(
        vp,
        vp.t6_c4_c2_anexo_pasta_nome,
        vp.t6_c4_c2_anexo_pasta_id,
        vp.t6_c4_c2_anexo_files,
        vp.t6_c4_c2_anexo_ged_arr
      );
      break;
  }

  return { formData: vp };
}

function rollback(data: any, info: any): any {
  if (info.isRequestNew()) return removeData(data.processInstanceId);
  return rollbackData(data.processInstanceId);
}

export { loadData, saveData, rollback };

import { ResponseLoadData, VP_BPM } from "src/beans/VP_BPM";
import { Info } from "src/beans/Workflow";
import { axios_header_token } from "src/beans/WS_Beans";
import { environment } from "src/environments/environment";

const STEP = environment.tarefa();

declare var removeData: any;
declare var rollbackData: any;

async function loadData(vp: VP_BPM, info: Info): Promise<ResponseLoadData> {
  var rld: ResponseLoadData = { initial: 1, tabs: [1, 2, 3], vp };

  rld.vp.user_fullName = (await info.getUserData()).username;

  const ptd = await info.getPlatformData();
  rld.vp.token = `bearer ${ptd.token.access_token}`;
  axios_header_token.headers!['Authorization'] = rld.vp.token;

  const ipv = await info.getInfoFromProcessVariables();
  /*if (STEP !== environment.s1_solicitacao_interna) {
    var map: Map<any, any> = new Map();
    for (let i of ipv) map.set(i.key, i.value);
    rld.vp = getVP(rld.vp, map);
  }*/
  /*rld = getFormPresentation(rld);
  rld.vp = await getAllDocuments(rld.vp);*/

  return rld;
}

function saveData(vp: VP_BPM): any {
  /*vp._3_investimento_array_txt = JSON.stringify(vp._3_investimento_array);
  vp._4_marke_recom_aprovacao_chk
    ? (vp._4_marke_recom_aprovacao_txt = 'true')
    : (vp._4_marke_recom_aprovacao_txt = 'false');
  vp._4_marke_planejado_chk
    ? (vp._4_marke_planejado_txt = 'true')
    : (vp._4_marke_planejado_txt = 'false');
  vp._4_coord_recom_aprovacao_chk
    ? (vp._4_coord_recom_aprovacao_txt = 'true')
    : (vp._4_coord_recom_aprovacao_txt = 'false');
  vp._4_super_recom_aprovacao_chk
    ? (vp._4_super_recom_aprovacao_txt = 'true')
    : (vp._4_super_recom_aprovacao_txt = 'false');
  vp._4_super_ciente_aprovacao_chk
    ? (vp._4_super_ciente_aprovacao_txt = 'true')
    : (vp._4_super_ciente_aprovacao_txt = 'false');*/

  return { formData: vp };
}

function rollback(data: any, info: any): any {
  console.log(data.error);
  if (info.isRequestNew()) return removeData(data.processInstanceId);
  return rollbackData(data.processInstanceId);
}

export { loadData, saveData, rollback };

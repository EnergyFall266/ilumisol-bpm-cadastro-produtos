import { AppService } from 'src/app/app.service';
import { ResponseLoadData, VP_BPM } from 'src/beans/VP_BPM';
import { Data, Info } from 'src/beans/Workflow';
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
    rld = getFormPresentation(rld);
  }

  rld.vp = await ap.getAllDocs(rld.vp);

  return rld;
}

export async function saveData(vp: VP_BPM) {
  if (STEP === environment.s2_dad_cad && vp.t5_file_TS.length > 0)
    vp = await ap.enviarDocs(vp, 'c');
  if (STEP === environment.s6_fis_con && vp.t6_file_TS.length > 0)
    vp = await ap.enviarDocs(vp, 'f');

  vp.unidades_medida_arr = [];
  vp.t1_c4_origem_arr = [];
  vp.t1_c5_familia_arr = [];
  vp.t1_c1_marca_arr = [];
  vp.t1_c3_clafiscal_arr = [];
  vp.t1_c8_agrcomercial_arr = [];
  vp.t1_c7_mercadoria_arr = [];
  vp.t1_c1_marca_arr = [];
  vp.t1_c3_clafiscal_arr = [];
  vp.t1_c8_agrcomercial_arr = [];
  vp.t1_c7_mercadoria_arr = [];
  vp.t1_c11_multinivel_arr = [];
  vp.t2_fornecedor_arr = [];
  vp.t3_c1_destino_arr = [];
  vp.t5_c1_mascara_arr = [];
  vp.t1_c9_agrestoque_arr = [];
  vp.t1_c10_agrcusto_arr = [];
  vp.t5_conversao_arr = [];
  vp.t6_c1_impostos_arr = [];
  vp.t6_c2_icms_espe_arr = [];
  vp.t6_c3_redu_icms_arr = [];
  vp.t6_substituicao_arr = [];
  vp.t6_situacao_arr = [];
  vp.t6_c9_enqua_arr = [];
  vp.t6_c12_enqua_esp_arr = [];
  vp.t6_c13_motivo_arr = [];

  return { formData: vp };
}

export function rollback(data: Data, info: Info) {
  if (info.isRequestNew()) return removeData(data.processInstanceId);
  return rollbackData(data.processInstanceId);
}

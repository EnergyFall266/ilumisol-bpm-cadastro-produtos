import { ResponseLoadData } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

export default function getFormPresentation(rld: ResponseLoadData) {
  rld.initial =
    STEP == environment.s2_dad_cad || STEP == environment.s3_rev_inf ? 2 : 3;
  rld.tabs.push(2);
  if (STEP === environment.s6_fis_con) rld.tabs.push(3);

  rld.vp.c1_empresa_rqd = true;
  rld.vp.hide_t1_show_t6 = STEP === environment.s6_fis_con;
  rld.vp.t1_req_to_read = STEP !== environment.s3_rev_inf;
  rld.vp.t5_req_to_read = STEP !== environment.s2_dad_cad;
  rld.vp.t6_req_to_read = STEP !== environment.s6_fis_con;
  rld.vp.c7_cadastro_show = STEP === environment.s6_fis_con;

  return rld;
}

import { ResponseLoadData } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

export default function getFormPresentation(rld: ResponseLoadData) {
  rld.initial =
    STEP == environment.s2_dad_cad || STEP == environment.s3_rev_inf
      ? 4
      : STEP == environment.s6_fis_con
      ? 5
      : 1;
  rld.tabs.push(4);
  if (STEP === environment.s6_fis_con) rld.tabs.push(5);

  rld.vp.c1_req_to_read = true;
  rld.vp.t1_req_to_read = true;
  rld.vp.t2_req_to_read = true;
  rld.vp.t3_req_to_read = true;
  rld.vp.t5_req_to_read = STEP !== environment.s2_dad_cad;
  rld.vp.t6_req_to_read = STEP === environment.s6_fis_con;
  rld.vp.c7_cadastro_show = STEP === environment.s6_fis_con;

  return rld;
}

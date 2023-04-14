import { ResponseLoadData } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

export default function getFormPresentation(rld: ResponseLoadData) {
  switch (STEP) {
    case environment.s1_sol_cad:
    case environment.s3_rev_inf:
    case environment.s5_rev_inf:
      if (STEP == environment.s3_rev_inf) {
        rld.initial = 5;
        rld.tabs.push(5);
        rld.vp.t5_show_only_recusa = true;
      } else if (STEP == environment.s5_rev_inf) {
        rld.initial = 6;
        rld.tabs.push(6);
        rld.vp.t6_show_only_recusa = true;
      }
      break;

    case environment.s2_dad_cad:
    case environment.s4_fis_con:
    case environment.s6_gra_pro:
      rld.tabs.push(5);

      if (STEP == environment.s2_dad_cad) {
        rld.initial = 5;
        rld.vp.t5_mandatory_to_readonly = false;
      } else {
        rld.initial = STEP === environment.s6_gra_pro ? 1 : 6;

        rld.vp.t1_mandatory_to_readonly = true;
        rld.vp.t2_mandatory_to_readonly = true;
        rld.vp.t3_mandatory_to_readonly = true;
        rld.vp.t4_mandatory_to_readonly = true;
        rld.vp.t6_mandatory_to_readonly = STEP === environment.s6_gra_pro;
        rld.vp.c7_cadastro_hide = STEP === environment.s4_fis_con;

        rld.tabs.push(6);
      }
      break;

    default:
      break;
  }

  return rld;
}

import { ResponseLoadData } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';

const STEP = environment.tarefa();

export default function getFormPresentation(rld: ResponseLoadData): ResponseLoadData {
  switch (STEP) {
    case environment.s1_sol_cad:
    case environment.s3_rev_inf:
    case environment.s5_rev_inf:
      if (STEP == environment.s3_rev_inf) {
        rld.tabs.push(5);
        rld.vp.t5_show_only_recusa = true;
      } else if (STEP == environment.s5_rev_inf) {
        rld.tabs.push(6);
        rld.vp.t6_show_only_recusa = true;
      }
      break;
    case environment.s2_dad_cad:
    case environment.s4_fis_con:
      rld.vp.t1_mandatory_to_readonly = true;
      rld.vp.t2_mandatory_to_readonly = true;
      rld.vp.t3_mandatory_to_readonly = true;
      rld.vp.t4_mandatory_to_readonly = true;

      rld.tabs.push(5);

      if (STEP == environment.s2_dad_cad) {
        rld.initial = 5;
        rld.vp.t5_mandatory_to_readonly = false;
      } else {
        rld.initial = 6;
        rld.vp.t6_mandatory_to_readonly = false;
        rld.tabs.push(6);
      }
      break;
    default:
      break;
  }

  return rld;
}

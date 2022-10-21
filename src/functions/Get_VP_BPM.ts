import { VP_BPM } from 'src/beans/VP_BPM';

export default function getVP(vp: VP_BPM, map: Map<any, any>): VP_BPM {
  vp.ged_pasta_pai_id = map.get('ged_pasta_pai_id');
  
  return vp;
}

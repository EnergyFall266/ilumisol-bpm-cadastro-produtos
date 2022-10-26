import { Injectable } from '@angular/core';
import { checkFolder } from 'prisma_prismafunctions';
import { VP_BPM } from 'src/beans/VP_BPM';
import { wsG5Exporta } from 'src/functions/WS_Axios';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  public async pegarPastas(vp: VP_BPM) {
    const paiId: string = await checkFolder(
      vp.token,
      {
        name: vp.ged_pasta_pai_nome,
        description: vp.ged_pasta_pai_nome,
        permissions: [{}], //environment.gedpapel,
        inheritedPermission: true,
      },
      ''
    );
  }

  public async exportaServico(port: string, vp: VP_BPM) {
    var r;
    if (port == 'ExportaFamilias' && vp.t1_c1_c3_origem_cod != '')
      r = await wsG5Exporta(port, `{ "codOri": "${vp.t1_c1_c3_origem_cod}" }`);
    else r = await wsG5Exporta(port);

    if ((port == 'ExportaProdutos' || port == 'ExportaProAgs') && r.produtos)
      return Array.isArray(r.produtos) ? r.produtos : [r.produtos];

    if (port == 'ExportaOrigens' && r.origens)
      return Array.isArray(r.origens) ? r.origens : [r.origens];

    return [];
  }
}

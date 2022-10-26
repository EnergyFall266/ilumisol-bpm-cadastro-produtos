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

  public async exportaServico(port: string, body: string = '') {
    var r;
    if (port == 'ExportaFamilias' && body != '')
      r = await wsG5Exporta(port, `{ "codOri": "${body}" }`);
    else if (port == 'ExportaValorLista')
      r = await wsG5Exporta(port, `{ "nomLis": "${body}" }`);
    else if (port == 'ExportaAgrupamentos')
      r = await wsG5Exporta(port, `{ "tipAgp": "${body}" }`);
    else r = await wsG5Exporta(port);

    if ((port == 'ExportaProdutos' || port == 'ExportaProAgs') && r.produtos)
      return Array.isArray(r.produtos) ? r.produtos : [r.produtos];
    else if (port == 'ExportaOrigens' && r.origens)
      return Array.isArray(r.origens) ? r.origens : [r.origens];
    else if (port == 'ExportaValorLista' && r.lista)
      return Array.isArray(r.lista) ? r.lista : [r.lista];
    else if (port == 'ExportaICMSEsp' && r.ICMS)
      return Array.isArray(r.ICMS) ? r.ICMS : [r.ICMS];
    else if (port == 'ExportaReducaoICMS' && r.reducao)
      return Array.isArray(r.reducao) ? r.reducao : [r.reducao];
    else if (port == 'ExportaSubstituicao' && r.substituicoes)
      return Array.isArray(r.substituicoes)
        ? r.substituicoes
        : [r.substituicoes];
    else if (port == 'ExportaMascaraDerivacao' && r.mascaras)
      return Array.isArray(r.mascaras) ? r.mascaras : [r.mascaras];
    else if (port == 'ExportaAgrupamentos' && r.agrupamentos)
      return Array.isArray(r.agrupamentos) ? r.agrupamentos : [r.agrupamentos];
    else if (port == 'ExportaUniMeds' && r.unidadesMedida)
      return Array.isArray(r.unidadesMedida)
        ? r.unidadesMedida
        : [r.unidadesMedida];

    return [];
  }
}

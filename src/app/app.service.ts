import { Injectable } from '@angular/core';
import { checkFolder } from 'prisma_prismafunctions';
import { VP_BPM } from 'src/beans/VP_BPM';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private vp: VP_BPM) {}

  public async pegar_pastas() {
    const paiId: string = await checkFolder(
      this.vp.token,
      {
        name: this.vp.ged_pasta_pai_nome,
        description: this.vp.ged_pasta_pai_nome,
        permissions: [{}], //environment.gedpapel,
        inheritedPermission: true,
      },
      ''
    );
  }
}

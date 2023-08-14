export const environment = {
  production: false,
  tarefa: () => {
    try {
      return '' + window.location.href.match(/#!\/(.*?)\//)![1];
    } catch (e) {
      return 'error';
    }
  },
  //url_padrao: window.location.origin ?? '',
  url_padrao: 'https://senior.ilumisol.com.br:8181',
  ged_papel: {
    active: true,
    permissionLevel: 3,
    subject: 'admin',
    type: 'ROLE',
  },
  s1_sol_cad: 's1_sol_cad',
  s2_dad_cad: 's2_dad_cad',
  s3_rev_inf: 's3_rev_inf',
  s6_fis_con: 's6_fis_con',
  version: 'DEV',
};

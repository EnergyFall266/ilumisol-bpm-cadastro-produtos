export const environment = {
  production: false,
  tarefa: () => {
    try {
      return '' + window.location.href.match(/#!\/(.*?)\//)![1];
    } catch (e) {
      return 'error';
    }
  },
  url_padrao: window.location.origin ?? '',
  ged_papel: {
    active: true,
    permissionLevel: 3,
    subject: 'admin',
    type: 'ROLE',
  },
  s1_sol_cad: 's1_sol_cad',
  s2_dad_cad: 's2_dad_cad',
  s3_rev_inf: 's3_rev_inf',
  s4_fis_con: 's4_fis_con',
  s5_rev_inf: 's5_rev_inf',
  s6_gra_pro: 's6_gra_pro',
};

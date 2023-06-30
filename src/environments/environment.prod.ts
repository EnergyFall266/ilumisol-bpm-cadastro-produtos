export const environment = {
  production: true,
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
  //s4_ges_log: 's4_ges_log',
  //s5_set_cus: 's5_set_cus',
  s6_fis_con: 's6_fis_con',
  //s7_gra_pro: 's7_gra_pro',
};

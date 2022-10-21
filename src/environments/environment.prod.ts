export const environment = {
  production: true,
  tarefa: () => {
    try {
      return '' + window.location.href.match(/#!\/(.*?)\//)![1];
    } catch (e) {
      return 'error';
    }
  },
  urlpadrao: window.location.origin ?? '',
  s1_sol_cad: 's1_sol_cad',
  s2_dad_cad: 's2_dad_cad',
  s3_rev_inf: 's3_rev_inf',
  s4_fis_con: 's4_fis_con',
  s5_rev_inf: 's5_rev_inf',
};

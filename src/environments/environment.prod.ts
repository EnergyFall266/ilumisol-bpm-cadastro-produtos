export const environment = {
  production: true,
  tarefa: () => {
    try {
      return '' + window.location.href.match(/#!\/(.*?)\//)![1];
    } catch (e) {
      return 'solicitacaoexterna';
    }
  },
  urlpadrao: window.location.origin ?? '',
};

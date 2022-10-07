export const environment = {
  production: false,
  tarefa: () => {
    try {
      return '' + window.location.href.match(/#!\/(.*?)\//)![1];
    } catch (e) {
      return 'solicitacaoexterna';
    }
  },
  urlpadrao: window.location.origin ?? '',
};

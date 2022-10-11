import { MenuItem } from 'primeng/api';

const Menus: MenuItem[] = [
  {
    label: 'Dados básicos',
    command: () => showPanel(1),
    visible: false,
  },
  {
    label: 'Dados do fornecedor',
    command: () => showPanel(2),
    visible: false,
  },
  {
    label: 'Dados de depósito',
    command: () => showPanel(3),
    visible: false,
  },
  {
    label: 'Observações e Anexos',
    command: () => showPanel(4),
    visible: false,
  },
  {
    label: 'Dados do cadastro',
    command: () => showPanel(5),
    visible: false,
  },
  {
    label: 'Dados fiscais e contábeis',
    command: () => showPanel(6),
    visible: false,
  },
];

type panelType = { [k: string]: boolean };
const Panels: panelType = {
  t1_basicos: false,
  t2_fornecedor: true,
  t3_deposito: true,
  t4_obs_ane: true,
  t5_cadastro: true,
  t6_fis_con: true,
};

function showMenus(inicial: number, panels: number[]): MenuItem {
  for (const i of panels) Menus[i - 1].visible = true;
  return showPanel(inicial);
}

function showPanel(panel: number): MenuItem {
  Object.keys(Panels).forEach((k) => (Panels[k] = true));
  if (panel === 1) Panels['t1_basicos'] = false;
  if (panel === 2) Panels['t2_fornecedor'] = false;
  if (panel === 3) Panels['t3_deposito'] = false;
  if (panel === 4) Panels['t4_obs_ane'] = false;
  if (panel === 5) Panels['t5_cadastro'] = false;
  if (panel === 6) Panels['t6_fis_con'] = false;
  return Menus[panel - 1];
}

export { Panels, Menus, showMenus };

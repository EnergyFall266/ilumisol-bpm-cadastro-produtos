import { MenuItem } from 'primeng/api';

export const menus: MenuItem[] = [
  {
    label: 'Dados básicos',
    command: () => showPanel(1),
    visible: false,
  },
  {
    label: 'Dados da derivação',
    command: () => showPanel(2),
    visible: false,
  },
  {
    label: 'Dados fiscais e contábeis',
    command: () => showPanel(3),
    visible: false,
  },
];

type panelType = { [k: string]: boolean };
export const panels: panelType = {
  t1_basicos: false,
  t2_cadastro: true,
  t3_fis_con: true,
};

export function showMenus(inicial: number, panels: number[]): MenuItem {
  for (const i of panels) menus[i - 1].visible = true;
  return showPanel(inicial);
}

function showPanel(panel: number): MenuItem {
  Object.keys(panels).forEach((k) => (panels[k] = true));
  if (panel === 1) panels['t1_basicos'] = false;
  else if (panel === 2) panels['t2_cadastro'] = false;
  else if (panel === 3) panels['t3_fis_con'] = false;
  return menus[panel - 1];
}

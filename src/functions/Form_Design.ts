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
  t1_Basicos: false,
  t2_Fornecedor: true,
  t3_Deposito: true,
  t4_ObsAnexo: true,
  t5_FiscCont: true,
};

function showMenus(
  inicial: number,
  panels: number[],
  disabled: boolean
): MenuItem {
  for (const i of panels) {
    Menus[i - 1].visible = true;
    if (i !== 1) Menus[i - 1].disabled = disabled;
  }
  return showPanel(inicial);
}

function showPanel(panel: number): MenuItem {
  Object.keys(Panels).forEach((k) => (Panels[k] = true));
  if (panel === 1) Panels['t1_Basicos'] = false;
  if (panel === 2) Panels['t2_Fornecedor'] = false;
  if (panel === 3) Panels['t3_Deposito'] = false;
  if (panel === 4) Panels['t4_ObsAnexo'] = false;
  if (panel === 5) Panels['t5_FiscCont'] = false;
  return Menus[panel - 1];
}

export { Panels, Menus, showMenus };

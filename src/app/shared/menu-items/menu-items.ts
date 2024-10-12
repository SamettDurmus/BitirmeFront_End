import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Anasayfa', type: 'link', icon: 'medication' },
  { state: 'test', type: 'link', name: 'Sağlık Testi', icon: 'medication' },
  { state: 'aortic', type: 'link', name: 'Aortic Enlargement', icon: 'medication' },
  { state: 'atelectasis', type: 'link', name: 'Atelectasis', icon: 'medication' },
  { state: 'calcification', type: 'link', name: 'Calcification', icon: 'medication' },
  { state: 'cardiomegaly', type: 'link', name: 'Cardiomegaly', icon: 'medication' },
  { state: 'consolidation', type: 'link', name: 'Consolidation', icon: 'medication' },
  {
    state: 'ild',
    type: 'link',
    name: 'ILD',
    icon: 'medication'
  },
  { state: 'infiltration', type: 'link', name: 'Infiltration', icon: 'medication' },
  
  {
    state: 'lungOpacity',
    type: 'link',
    name: 'Lung Opacity',
    icon: 'medication'
  },{ state: 'nodule-mass', type: 'link', name: 'Nodule/Mass', icon: 'medication' },
  
  {
    state: 'other-lesion',
    type: 'link',
    name: 'Other Lesion',
    icon: 'medication'
   },
  {
    state: 'pleural-effusion',
    type: 'link',
    name: 'Pleural Effusion',
    icon: 'medication'
  },
  { state: 'pleural-thickening', type: 'link', name: 'Pleural Thickening', icon: 'medicationt' },
  { state: 'pneumothorax', type: 'link', name: 'Pneumothorax', icon: 'medication' },
  { state: 'pulmonaryFibrosis', type: 'link', name: 'Pulmonary Fibrosis', icon: 'medication' },
  // {
  //   state: 'slide-toggle',
  //   type: 'link',
  //   name: 'Slide Toggle',
  //   icon: 'all_inclusive'
  // }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}

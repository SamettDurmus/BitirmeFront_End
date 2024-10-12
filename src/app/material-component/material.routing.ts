import { Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { AtelectasisComponent } from './atelectasis/atelectasis.component';
import { AorticComponent } from './aortic/aortic.component';
import { CalcificationComponent } from './calcification/calcification.component';
import { CardiomegalyComponent } from './cardiomegaly/cardiomegaly.component';
import { ConsolidationComponent} from './consolidation/consolidation.component';
import {  ILDComponent } from './ild/ild.component';
import { InfiltrationComponent } from './infiltration/infiltration.component';
import { LungOpacityComponent } from './lungOpacity/lungOpacity.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { OtherLesionComponent } from './other-lesion/other-lesion.component';
import { PleuralEffusionComponent } from './pleural-effusion/pleural-effusion.component';
import { PleuralThickeningComponent } from './pleural-thickening/pleural-thickening.component';
import { PneumothoraxComponent } from './pneumothorax/pneumothorax.component';
import { PulmonaryFibrosisComponent } from './pulmonary-fibrosis/pulmonary-fibrosis.component';
import { NoduleMassComponent } from './nodule-mass/nodule-mass.component';

export const MaterialRoutes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'atelectasis',
    component: AtelectasisComponent
  },
  {
    path: 'aortic',
    component: AorticComponent
  },
  {
    path: 'calcification',
    component: CalcificationComponent
  },
  {
    path: 'cardiomegaly',
    component: CardiomegalyComponent
  },
  {
    path: 'consolidation',
    component: ConsolidationComponent
  },
  {
    path: 'ild',
    component: ILDComponent
  },
  {
    path: 'infiltration',
    component: InfiltrationComponent
  },
  {
    path: 'lungOpacity',
    component: LungOpacityComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'other-lesion',
    component: OtherLesionComponent
  },
  {
    path: 'pleural-effusion',
    component: PleuralEffusionComponent
  },
  {
    path: 'pleural-thickening',
    component: PleuralThickeningComponent
  },
  {
    path: 'pneumothorax',
    component: PneumothoraxComponent
  },
  {
    path: 'pulmonaryFibrosis',
    component: PulmonaryFibrosisComponent
  },
  {
    path: 'nodule-mass',
    component: NoduleMassComponent
  }
];

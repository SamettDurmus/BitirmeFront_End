import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialRoutes } from './material.routing';
import { TestComponent } from './test/test.component';

import { AtelectasisComponent } from './atelectasis/atelectasis.component';
import { AorticComponent } from './aortic/aortic.component';
import { CalcificationComponent } from './calcification/calcification.component';
import { CardiomegalyComponent } from './cardiomegaly/cardiomegaly.component';
import { ConsolidationComponent } from './consolidation/consolidation.component';
import { ILDComponent } from './ild/ild.component';
import { InfiltrationComponent } from './infiltration/infiltration.component';
import { LungOpacityComponent } from './lungOpacity/lungOpacity.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { OtherLesionComponent } from './other-lesion/other-lesion.component';
import {
  PleuralEffusionComponent
} from './pleural-effusion/pleural-effusion.component';
import { PleuralThickeningComponent } from './pleural-thickening/pleural-thickening.component';
import { PneumothoraxComponent} from './pneumothorax/pneumothorax.component';
import { PulmonaryFibrosisComponent } from './pulmonary-fibrosis/pulmonary-fibrosis.component';
import { NoduleMassComponent } from './nodule-mass/nodule-mass.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CdkTableModule,

    TestComponent,
    AtelectasisComponent,
    AorticComponent,
    CalcificationComponent,
    CardiomegalyComponent,
    ConsolidationComponent,
    ILDComponent,
    InfiltrationComponent,
    LungOpacityComponent,
    ProgressSnipperComponent,
    OtherLesionComponent,
    PleuralEffusionComponent,
    PleuralThickeningComponent,
    PneumothoraxComponent,
    PulmonaryFibrosisComponent,
    NoduleMassComponent
  ],
  providers: [],
})
export class MaterialComponentsModule {}

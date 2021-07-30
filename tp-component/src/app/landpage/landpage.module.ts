import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandpageRoutingModule } from './landpage-routing.module';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LandpageRoutingModule
  ]
})
export class LandpageModule { }

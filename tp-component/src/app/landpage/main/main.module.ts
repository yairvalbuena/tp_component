import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MaterialModule } from 'src/app/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout'

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class MainModule { }

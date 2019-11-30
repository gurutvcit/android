import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainactivityPageRoutingModule } from './mainactivity-routing.module';

import { MainactivityPage } from './mainactivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainactivityPageRoutingModule
  ],
  declarations: [MainactivityPage]
})
export class MainactivityPageModule {}

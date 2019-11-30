import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndroidruntimepermissionPageRoutingModule } from './androidruntimepermission-routing.module';

import { AndroidruntimepermissionPage } from './androidruntimepermission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndroidruntimepermissionPageRoutingModule
  ],
  declarations: [AndroidruntimepermissionPage]
})
export class AndroidruntimepermissionPageModule {}

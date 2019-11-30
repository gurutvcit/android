import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndroidruntimepermissionPage } from './androidruntimepermission.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidruntimepermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndroidruntimepermissionPageRoutingModule {}

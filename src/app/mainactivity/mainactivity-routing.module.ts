import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainactivityPage } from './mainactivity.page';

const routes: Routes = [
  {
    path: '',
    component: MainactivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainactivityPageRoutingModule {}

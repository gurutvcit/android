import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'androidruntimepermission',
    loadChildren: () => import('./androidruntimepermission/androidruntimepermission.module').then( m => m.AndroidruntimepermissionPageModule)
  },
  {
    path: 'mainactivity',
    loadChildren: () => import('./mainactivity/mainactivity.module').then( m => m.MainactivityPageModule)
  },
  {
    path: 'itemgroup',
    loadChildren: () => import('./itemgroup/itemgroup.module').then( m => m.ItemgroupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

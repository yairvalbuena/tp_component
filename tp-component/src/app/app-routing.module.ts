import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landpage',
    loadChildren:()=>import('./landpage/landpage.module').then(m=>m.LandpageModule)
  },
  {   path: '**',
  redirectTo:'landpage'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthProfileComponent } from './auth-profile.component';

const routes: Routes = [
  {
    path:'',
    component:AuthProfileComponent,
    loadComponent: () => import("./auth-profile.component").then(o => o.AuthProfileComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthProfileRoute { }

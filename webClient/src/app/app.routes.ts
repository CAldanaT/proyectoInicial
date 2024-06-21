import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import("./componets/home/home.component").then(o => o.HomeComponent),
  },
  {
    path:'login',
    loadComponent: () => import("./componets/login/login.component").then(o => o.LoginComponent)
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
]
import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import("./componets/auth-profile/auth-profile.routes")
  },
  {
    path:'',
    loadComponent: () => import("./componets/home/home.component").then(o => o.HomeComponent),
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
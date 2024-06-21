import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import("./componets/home/home.component").then(m => m.HomeComponent),
  },
  {
    path:'auth',
    children: [
      {
        path:'login',
        loadChildren: () => import("./componets/auth-profile/auth-profile.component")
      }
    ]
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
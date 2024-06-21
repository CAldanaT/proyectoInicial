import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import("./componets/home/home.component").then(m => m.HomeComponent),
  },
  {
    path:'auth',
    loadComponent: () => import("./componets/home/home.component").then(o => o.HomeComponent),
    children:[
      {
        path:'login',
        loadComponent: () => import("./componets/auth-profile/auth-profile.component").then(o => o.AuthProfileComponent)
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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

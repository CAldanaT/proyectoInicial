import { Routes } from '@angular/router'
import { AuthProfileComponent } from './componets/auth-profile/auth-profile.component'
import { HomeComponent } from './componets/home/home.component'
import { AppComponent } from './app.component'

export const routes: Routes = [
  {
    path:'auth',
    component:AuthProfileComponent,
    loadChildren: () => import("./componets/auth-profile/auth-profile.routes")
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
]
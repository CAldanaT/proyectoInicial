import { Route, Routes } from '@angular/router';
import { AuthProfileComponent } from './auth-profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../home/home.component';

export default [
  {path:'', component:AuthProfileComponent},
  {path: 'login', component:LoginComponent}
] as Route[];
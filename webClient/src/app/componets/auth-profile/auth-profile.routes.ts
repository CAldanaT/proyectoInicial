import { Route } from '@angular/router';
import { AuthProfileComponent } from './auth-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export default [
  { path: '', component: AuthProfileComponent },
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
] as Route [];
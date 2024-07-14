import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService, private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(!this.authService.user && !this.authService.user.token){
      this.router.navigate(['auth/login']);
      return false;
    }

    let token = this.authService.token;

    let expiresIn = (JSON.parse(atob(token.split('.')[1]))).exp;

    if(Math.floor((new Date).getTime() / 1000) >= expiresIn){
      this.authService.logout();
      return false;
    }

    

    return true;
  }

}

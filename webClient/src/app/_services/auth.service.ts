import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
//import { Restangular } from 'ng2-restangular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  token: string | undefined;

  //, private restangular: Restangular

  constructor(private http: HttpClient, private router: Router) { 
  }

  login(email: string, password: string){
    let url = environment.URL_SERVICES + '/users/login';

    return this.http.post(url, {email, password}).pipe(
      map((response:any) => {
        if(response && response.access_token){
          return this.saveLocalStorageResponse(response);
        } else{
          return response;
        }
      }), 
      catchError((error:any) => {
        return of(error);
      })
    )
  }

  // loginv2(email: string, password: string) {
  //   let object = {
  //     email: email,
  //     password:password 
  //   }
  //   return this.restangular.all('users').get(object).pipe(
  //     map((response:any) => {
  //       if(response && response.access_token){
  //         return this.saveLocalStorageResponse(response);
  //       } else{
  //         return response;
  //       }
  //     }), 
  //     catchError((error:any) => {
  //       return of(error);
  //     })
  //   )
  // }

  saveLocalStorageResponse(obj:any){
    if(obj && obj.user && obj.access_token){
      localStorage.setItem("token", obj.access_token);
      localStorage.setItem("user", JSON.stringify(obj.user));
      this.token = obj.access_token;
      this.user = obj.user;

      return true;
    }

    return false;
  }
}

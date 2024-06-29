import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { DataEntryService } from './dataentry.service';
//import { Restangular } from 'ng2-restangular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  token: any;
  isLoggedIn: any;

  constructor(private http: HttpClient, private router: Router, private dataEntryService: DataEntryService) { 
    this.loadStorage();
  }

  loadStorage(){
    this.user = this.dataEntryService.getData("user");
    this.isLoggedIn = this.dataEntryService.getData("isLoggedIn");
  }

  login(email: string, password: string){
    return this.http.post(environment.URL_SERVICES + '/api/users/login', {email, password}).pipe(
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

  register(newUser: any){
    return this.http.post(environment.URL_SERVICES + '/api/users/register', newUser)
  }

  logout(){
    this.user = null;
    this.token = null;
    localStorage.clear();
    this.router.navigate(['auth/login']);
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
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem("token", obj.access_token);
      localStorage.setItem("user", JSON.stringify(obj.user));

      this.token = obj.access_token;
      this.user = obj.user;

      return true;
    }

    return false;
  }
}

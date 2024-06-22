import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  token: string | undefined;

  constructor(private http: HttpClient, private router: Router) { 
    // user and token need to load
  }

  login(email: string, password: string){
    let url = environment.URL_SERVICES + '/users/login';

    return this.http.post(url, {email, password});
  }
}

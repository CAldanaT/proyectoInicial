import { Component, Inject, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../_services/auth.service';
import {FormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;

  constructor(public authSerice:AuthService, private toasttr : ToastrService){ }

  ngOnInit(): void{ }

  login(){
    if(!this.email || !this.password){
      this.toasttr.error("The user and password are required.");
      return;
    }

    this.authSerice.login(this.email, this.password)
    .subscribe((response:any) => {
      if(!response.error && response){
        //add positive validation
      }else{
        this.toasttr.error(response.error.error, 'Error')
      }
    })
  }
}

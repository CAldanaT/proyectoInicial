import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../_services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;

  constructor(public authSerice:AuthService){ }

  ngOnInit(): void{ }

  login(){
    if(!this.email || !this.password){
      alert("You need to add your User Name and Password");
      return;
    }

    this.authSerice.login(this.email, this.password).subscribe((response:any) => {
      console.log(response);
    })
  }
}

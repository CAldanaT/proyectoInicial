import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { AuthService } from '../../../_services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { UserModel } from '../../../_models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  newUser:any = {};
  registrationForm?: any;
  hasError?: boolean;

  constructor(public authService:AuthService, public fb: FormBuilder, private toasttr : ToastrService, private router:Router){
  }

  ngOnInit(): void {

    if(this.authService.user && this.authService.isLoggedIn){
      this.router.navigate(['/'])
    }

    this.initForm();
  }

  get f(){
    return this.registrationForm.controls;
  }

  initForm(){
    this.registrationForm = this.fb.group({
      name: ['', 
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255)
        ])
      ],
      email: ['qwe@qwe',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(255)
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
      cPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
      agree: [false, Validators.compose([Validators.required])],
    },
    {
      validator: ConfirmPasswordValidator.MatchPassword,
    }
  );
  }

  register(){
    if(!this.newUser.name || !this.newUser.email || !this.newUser.password || !this.newUser.cPassword){
      this.toasttr.error("Fields with the symbol * are required", "Error");
      return;
    }

    if(this.newUser.password !== this.newUser.cPassword){
      this.toasttr.error("Password does not match. Please check it again.")
      return;
    }

    if(!this.newUser.agree){
      this.toasttr.error("You need to agree to terms & conditions");
      return;
    }

    this.hasError = false;


    this.authService.register(this.newUser).subscribe((response:any) => {
      console.log(response);
      this.toasttr.success('Registration has been successful.', 'Success');
      this.router.navigate(['/auth/login']);
    })
  }
}

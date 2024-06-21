import { Component } from '@angular/core';

declare var $:any;
declare function pageInit([]):any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngOnInit(): void {
    setTimeout(() => {
      pageInit($);
    }, 50);
  }
}

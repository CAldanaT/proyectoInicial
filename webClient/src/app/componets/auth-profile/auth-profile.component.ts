import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

declare var $:any;
declare function pageInit([]):any;

@Component({
  selector: 'app-auth-profile',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './auth-profile.component.html',
  styleUrl: './auth-profile.component.css'
})
export class AuthProfileComponent {
  ngOnInit(): void {
    setTimeout(() => {
      pageInit($);
    }, 50);
  }
}

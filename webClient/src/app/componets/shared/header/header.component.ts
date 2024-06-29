import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataEntryService } from '../../../_services/dataentry.service';
import { AuthService } from '../../../_services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  user:any;
  isLoggedIn:any;

  constructor(public authService:AuthService){}

  ngOnInit(): void {
    this.user = this.authService.user;
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout(){
    this.authService.logout();
  }
}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataEntryService } from '../../../_services/dataentry.service';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  user:any;

  constructor(public dataEntryService: DataEntryService, public authService:AuthService){}

  ngOnInit(): void {
    this.user = this.dataEntryService.getData("user");
  }

  logout(){
    this.authService.logout();
  }

  printConsole(){
    console.log(this.user);
  }
}

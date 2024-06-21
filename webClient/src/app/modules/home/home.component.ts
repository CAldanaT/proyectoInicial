import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

declare var $:any;
declare function pageInit([]):any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(){

    setTimeout(() => {
      pageInit($);
    }, 50);
  }
}

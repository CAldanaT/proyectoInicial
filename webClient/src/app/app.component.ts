import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

declare var $:any;
declare function pageInit([]):any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webClient';

  ngOnInit(): void {
    setTimeout(() => {
      pageInit($);
    }, 50);
  }
}

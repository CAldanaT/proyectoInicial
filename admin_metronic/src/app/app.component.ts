import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashScreenModule } from './_metronic/partials/layout/splash-screen/splash-screen.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SplashScreenModule]
})
export class AppComponent {
  title = 'admin_metronic';
}

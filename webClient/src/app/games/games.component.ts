import { Component, ViewEncapsulation } from '@angular/core';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [DropDownsModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  defaultItem = {description: "Select Some Game", id: null};
  games = [
    {description: "game 1", id: 1},
    {description: "game 2", id: 2}
  ];
}

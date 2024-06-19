import { Component, ViewEncapsulation } from '@angular/core';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [DropDownsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  public defaultItem = {description: "Select Some Game", id: null};
  public games = [
    {description: "game 1", id: 1},
    {description: "game 2", id: 2}
  ];
  public selectedValue: any;
}

import { Component } from '@angular/core';
import { PokemonListComponent } from "../pokemon-list/pokemon-list.component";

@Component({
  selector: 'app-dashboard',
  imports: [PokemonListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

import { Component } from '@angular/core';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonShortInfoModel } from '../../models/pokemon-short-info.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  imports: [NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'

})
export class PokemonListComponent {

  public pokemonList: PokemonShortInfoModel[] = [];

  constructor(private apiService: PokemonApiService) {
    this.apiService.getPokemonList().subscribe((pokemonListModel) => {
      pokemonListModel.results.forEach((shortInfo) => {
        this.pokemonList.push(shortInfo);
      })

    })
  }

  public getPokemonDetails(url: string): void {
    this.apiService.getPokemonDetails(url).subscribe((details) => {
      console.log(details);
    })
  }

}

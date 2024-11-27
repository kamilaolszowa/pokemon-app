import { Component } from '@angular/core';
import { PokemonApiService } from '../../services/pokemon-api.service';
import { PokemonShortInfoModel } from '../../models/pokemon-short-info.model';
import { NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { PokemonDetailsModel } from '../../models/pokemon-details.model';
import { PokemonListModel } from '../../models/pokemon-list.model';

@Component({
  selector: 'app-pokemon-list',
  imports: [
    NgFor,
    NgIf,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'

})
export class PokemonListComponent {
  public pokemonList: PokemonShortInfoModel[] = [];
  public nextPageUrl: string = '';

  constructor(private apiService: PokemonApiService) {
    this.fetchPokemons();
  }

  public fetchPokemons(): void {
    this.apiService.getPokemonList().subscribe((pokemonListModel) => {
      this.addPokemonsToList(pokemonListModel);
      this.nextPageUrl = pokemonListModel.next;
    })
  }

  public fetchMorePokemons(): void {
    this.apiService.getMorePokemons(this.nextPageUrl).subscribe((pokemonListModel) => {
      this.addPokemonsToList(pokemonListModel);
      this.nextPageUrl = pokemonListModel.next;
    })
  }

  public getPokemonImage(url: string): string {
    return this.apiService.getPokemonImage(url);
  }

  public getPokemonDetails(pokemon: PokemonShortInfoModel): void {
    this.apiService.getPokemonDetails(pokemon.url).subscribe((details) => {
      pokemon.details = details;
    })
  }

  public getPokemonTypes(pokemon: PokemonShortInfoModel): string | undefined {
    return pokemon.details?.types.map((type) => type.type.name).join(', ')
  }

  private addPokemonsToList(pokemonListModel: PokemonListModel): void {
    pokemonListModel.results.forEach((shortInfo) => {
      this.pokemonList.push(shortInfo);
    });
  }

}

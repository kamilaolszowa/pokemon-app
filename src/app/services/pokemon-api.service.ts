import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListModel } from '../models/pokemon-list.model';
import { PokemonDetailsModel } from '../models/pokemon-details.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private baseUrl: string = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  public getPokemonList(): Observable<PokemonListModel> {
    return this.http.get<PokemonListModel>(this.baseUrl + '/pokemon');
  }

  public getMorePokemons(url: string): Observable<PokemonListModel> {
    return this.http.get<PokemonListModel>(url);

  }

  public getPokemonDetails(url: string): Observable<PokemonDetailsModel> {
    return this.http.get<PokemonDetailsModel>(url);
  }

  public getPokemonImage(url: string): string {
    const id = url.match(/\/pokemon\/(\d+)\//)?.[1];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
}

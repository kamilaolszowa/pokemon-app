import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListModel } from '../models/pokemon-list.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private baseUrl: string = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }

  public getPokemonList(): Observable<PokemonListModel> {
    return this.http.get<PokemonListModel>(this.baseUrl + '/pokemon')
  }

  public getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url)
  }


}

import { PokemonShortInfoModel } from "./pokemon-short-info.model";

export interface PokemonListModel {
    count: number;
    next: string;
    previous: string;
    results: PokemonShortInfoModel[];
}
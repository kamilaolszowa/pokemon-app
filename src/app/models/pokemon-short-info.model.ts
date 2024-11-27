import { PokemonDetailsModel } from "./pokemon-details.model";

export interface PokemonShortInfoModel {
    name: string;
    url: string;
    details?: PokemonDetailsModel;
}
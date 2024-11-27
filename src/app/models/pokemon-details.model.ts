export interface PokemonDetailsModel {
    height: number;
    weight: number;
    types: { type: { name: string } }[];
}
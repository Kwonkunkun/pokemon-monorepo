export type Pokemon = {
  id: number;
  name: Name;
  type: Array<string>;
  base: Base;
};

type Base = {
  Hp: number;
  Attack: number;
  Defense: number;
  Speed: number;
};

type Name = {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
};

export type GetPokemonsArgs = {
  page: number;
  size: number;
};

export type GetPokemonArgs = {
  id: number;
};

export type AddPokemonArgs = {
  name: string;
  type: string;
};

export type DeletePokemonArgs = {
  id: number;
};

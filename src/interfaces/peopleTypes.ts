import {
    FilmRoutesType,
    SpeciesRoutesType,
    VehicleRoutesType,
    StarshipRoutesType,
    HomeworldRoutesType,
    Number,
} from '@/interfaces/';

export type PeopleRoutesType =
    | `https://swapi.dev/api/people/${Number}/`
    | `https://swapi.dev/api/people/${Number}${Number}/`;

export interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: HomeworldRoutesType;
    films: FilmRoutesType[];
    species: SpeciesRoutesType[];
    vehicles: VehicleRoutesType[];
    starships: StarshipRoutesType[];
    url: string;
}

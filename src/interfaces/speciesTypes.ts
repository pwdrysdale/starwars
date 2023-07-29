import {
    FilmRoutesType,
    HomeworldRoutesType,
    Number,
    PeopleRoutesType,
} from '@/interfaces/';

export type SpeciesRoutesType =
    | `https://swapi.dev/api/species/${Number}/`
    | `https://swapi.dev/api/species/${Number}${Number}/`;

export type Species = {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    skin_colors: string;
    language: string;
    homeworld: HomeworldRoutesType;
    people: PeopleRoutesType;
    films: FilmRoutesType;
    url: string;
    created: string;
    edited: string;
};

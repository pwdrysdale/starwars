import { FilmRoutesType, Number, PeopleRoutesType } from '@/interfaces/';

export type HomeworldRoutesType =
    | `https://swapi.dev/api/planets/${Number}/`
    | `https://swapi.dev/api/planets/${Number}${Number}/`;

export type Homeworld = {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: PeopleRoutesType[];
    films: FilmRoutesType[];
    url: string;
    created: string;
    edited: string;
};

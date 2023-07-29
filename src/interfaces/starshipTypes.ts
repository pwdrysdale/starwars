import { FilmRoutesType, Number, PeopleRoutesType } from '@/interfaces/';

export type StarshipRoutesType =
    | `https://swapi.dev/api/starships/${Number}/`
    | `https://swapi.dev/api/starships/${Number}${Number}/`;

export type Starship = {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    consumables?: string;
    films: FilmRoutesType[];
    pilots: PeopleRoutesType[];
    url: string;
    created: string;
    edited: string;
};

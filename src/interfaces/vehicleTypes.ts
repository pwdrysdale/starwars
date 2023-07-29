import { Number } from './helpers';
import { FilmRoutesType } from '@/interfaces/filmTypes';
import { PeopleRoutesType } from '@/interfaces/peopleTypes';

export type VehicleRoutesType =
    | `https://swapi.dev/api/vehicles/${Number}/`
    | `https://swapi.dev/api/vehicles/${Number}${Number}/`;

export type Vehicle = {
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    films: FilmRoutesType[];
    pilots: PeopleRoutesType[];
    url: string;
    created: string;
    edited: string;
};

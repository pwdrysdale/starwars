import {
    HomeworldRoutesType,
    PeopleRoutesType,
    SpeciesRoutesType,
    StarshipRoutesType,
    VehicleRoutesType,
} from '@/interfaces/';

export type FilmRoutesType =
    | 'https://swapi.dev/api/films/1/'
    | 'https://swapi.dev/api/films/2/'
    | 'https://swapi.dev/api/films/3/'
    | 'https://swapi.dev/api/films/4/'
    | 'https://swapi.dev/api/films/5/'
    | 'https://swapi.dev/api/films/6/'
    | 'https://swapi.dev/api/films/7/';

export type Film = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    species: SpeciesRoutesType[];
    starships: StarshipRoutesType[];
    vehicles: VehicleRoutesType[];
    characters: PeopleRoutesType[];
    planets: HomeworldRoutesType[];
    url: string;
    created: string;
    edited: string;
};

export const isFilm = (obj: any): obj is Film => {
    return (
        obj.title !== undefined &&
        obj.episode_id !== undefined &&
        obj.opening_crawl !== undefined &&
        obj.director !== undefined &&
        obj.producer !== undefined &&
        obj.release_date !== undefined &&
        obj.species !== undefined &&
        obj.starships !== undefined &&
        obj.vehicles !== undefined &&
        obj.characters !== undefined &&
        obj.planets !== undefined &&
        obj.url !== undefined &&
        obj.created !== undefined &&
        obj.edited !== undefined
    );
};

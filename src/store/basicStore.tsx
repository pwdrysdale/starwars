import { SetState } from "zustand"

import api from "@/config/api"

import {
    Vehicle,
    Species,
    Homeworld,
    Starship,
    VehicleRoutesType,
    SpeciesRoutesType,
    HomeworldRoutesType,
    StarshipRoutesType,
    Film,
    FilmRoutesType,
} from "@/interfaces"

interface BasicStoreUses {
    vehicles: { type: Vehicle; urls: VehicleRoutesType }
    species: { type: Species; urls: SpeciesRoutesType }
    planets: { type: Homeworld; urls: HomeworldRoutesType }
    starships: { type: Starship; urls: StarshipRoutesType }
    films: { type: Film; urls: FilmRoutesType }
}

interface BasicStore<T extends keyof BasicStoreUses> {
    data: Map<string, BasicStoreUses[T]["type"]>
    loading: Set<BasicStoreUses[T]["urls"]>
    error: boolean
    get: (
        url: BasicStoreUses[T]["urls"]
    ) => Promise<BasicStoreUses[T]["type"] | undefined>
    getList: (
        url: BasicStoreUses[T]["urls"][]
    ) => Promise<BasicStoreUses[T]["type"][]>
}

export const basicStore =
    <T extends keyof BasicStoreUses>(apiRoute: T) =>
    (set: SetState<BasicStore<T>>, get: () => BasicStore<T>): BasicStore<T> => {
        return {
            data: new Map(),
            loading: new Set(),
            error: false,
            get: async (url) => {
                if (get().data.has(url)) {
                    return get().data.get(url)
                } else if (get().loading.has(url)) {
                    return undefined
                } else {
                    set({ loading: new Set([...get().loading, url]) })
                    try {
                        const id = url.split("/").slice(-2)[0]
                        const response = await api.get<
                            BasicStoreUses[T]["type"]
                        >(`/${apiRoute}/${id}`)
                        set({
                            data: new Map([
                                ...get().data,
                                [url, response.data],
                            ]),
                        })
                        return response.data
                    } catch (error) {
                        set({ error: true })
                        return undefined
                    } finally {
                        const loading = new Set(get().loading)
                        loading.delete(url)
                        set({ loading })
                    }
                }
            },
            getList: async (urls: BasicStoreUses[T]["urls"][]) => {
                const list = (await Promise.all(
                    urls.map(async (url) => get().get(url))
                )) as BasicStoreUses[T]["type"][]
                return list.filter((item) => item !== undefined)
            },
        }
    }

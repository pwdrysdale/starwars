// a store with data stored as a map, and a search function

import { create } from "zustand"

import api from "@/config/api"

import { PeopleRoutesType, Person } from "@/interfaces"

interface PeopleStore {
    data: Map<PeopleRoutesType, Person>
    loading: Set<PeopleRoutesType>
    error: boolean
    get: (url: PeopleRoutesType) => Promise<Person | undefined>
    getList: (urls: PeopleRoutesType[]) => Promise<Person[] | undefined>
    searchText: string
    setSearchText: (text: string) => void
    runSearch: () => void
    searchResults: Person[]
    searching: boolean
    hasSearched: boolean
    clearSearch: () => void
}

export const peopleStore = create<PeopleStore>((set, get) => {
    return {
        data: new Map(),
        loading: new Map(),
        error: false,
        get: async (url: PeopleRoutesType): Promise<Person | undefined> => {
            if (get().data.has(url)) {
                return get().data.get(url)
            } else if (get().loading.has(url)) {
                return undefined
            } else {
                set({ loading: new Set([...get().loading, url]) })
                try {
                    const id = url.split("/").slice(-2)[0]
                    const response = await api.get<Person>(`/people/${id}`)
                    const person = response.data
                    set({
                        data: new Map([...get().data, [url, person]]),
                    })
                    return person
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
        getList: async (urls: PeopleRoutesType[]) => {
            const list = await Promise.all(
                urls.map(async (url) => get().get(url))
            )
            return list.filter((item) => item !== undefined) as Person[]
        },
        searchText: "",
        setSearchText: (text: string) => {
            set({ searchText: text })
            if (!text) {
                set({ searchResults: [], hasSearched: false })
            }
        },
        runSearch: async () => {
            set({ searching: true, hasSearched: false })
            const people = await api.get(`/people?search=${get().searchText}`)
            set({
                searchResults: people.data.results,
                hasSearched: true,
                searching: false,
            })
        },
        searchResults: [],
        searching: false,
        hasSearched: false,
        clearSearch: () => {
            set({ searchText: "", searchResults: [], hasSearched: false })
        },
    }
})

export default peopleStore

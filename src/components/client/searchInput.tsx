"use client"

import usePeopleStore from "@/store/peopleStore"
import { useEffect } from "react"
import PeopleList from "@/components/server/peopleList"
import useWatcher from "@/hooks/useWatcher"

const SearchInput = () => {
    const {
        searchText,
        setSearchText,
        runSearch,
        searchResults,
        hasSearched,
        searching,
        clearSearch,
    } = usePeopleStore()

    const handleEnter = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            runSearch()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEnter)
        return () => {
            document.removeEventListener("keydown", handleEnter)
        }
    }, [])

    useWatcher(searchText, 1000, () => {
        if (searchText) {
            runSearch()
        }
    })

    return (
        <div>
            <div
                className="flex flex-col w-full items-center justify-end transition-all duration-1000"
                style={{ height: searchResults.length ? "20vh" : "40vh" }}
            >
                <label htmlFor="search">
                    <span className="mx-8 text-sm text-gray-700 dark:text-gray-500">
                        Find a member of the galaxy...
                    </span>
                </label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    value={searchText}
                    className="bg-transparent  px-8 py-4 rounded-full md:w-96  text-xl outline-none hover:ring-4 hover:ring-yellow-200 ring-2 focus:ring-4 ring-yellow-500  transition-color duration-500"
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
            </div>
            <PeopleList
                people={searchResults}
                hasSearched={hasSearched}
                searching={searching}
                clearSearch={clearSearch}
            />
        </div>
    )
}

export default SearchInput

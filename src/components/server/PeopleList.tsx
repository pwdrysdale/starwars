import { FC } from "react"
import Link from "next/link"

import { Person } from "@/interfaces"
import Loader from "./Loader"

interface IPeopleListProps {
    people: Person[]
    searching: boolean
    hasSearched: boolean
    clearSearch: () => void
}

const PeopleList: FC<IPeopleListProps> = ({
    people,
    searching,
    hasSearched,
    clearSearch,
}) => {
    const getId = (url: string) => {
        const regex = /\d+/g
        return url.match(regex)?.[0]
    }

    if (searching || (hasSearched && !people.length)) {
        return (
            <div className="flex justify-center w-full mx-auto mt-4">
                <span className="text-sm text-gray-700 dark:text-gray-500">
                    {searching ? <Loader /> : "No results found"}
                </span>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center w-full mx-auto">
            <ul>
                {people?.map((person, index) => (
                    <Link href={`/profile/${getId(person.url)}`} key={index}>
                        <li className="flex items-center justify-center w-full h-full px-4 py-2 my-2 text-center transition-all duration-500 border-2 rounded-lg cursor-pointer hover:border-gray-400 dark:hover:border-gray-600 w-72 text-bold">
                            <span>{person.name}</span>
                        </li>
                    </Link>
                ))}
            </ul>
            {people.length ? (
                <div
                    onClick={clearSearch}
                    className="text-red-500 transition-all duration-500 cursor-pointer hover:text-red-700"
                >
                    Clear
                </div>
            ) : null}
        </div>
    )
}

export default PeopleList

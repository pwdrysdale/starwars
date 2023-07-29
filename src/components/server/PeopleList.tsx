import { FC } from 'react';
import Link from 'next/link';

import { Person } from '@/interfaces';

interface IPeopleListProps {
    people: Person[];
    searching: boolean;
    hasSearched: boolean;
    clearSearch: () => void;
}

const PeopleList: FC<IPeopleListProps> = ({
    people,
    searching,
    hasSearched,
    clearSearch,
}) => {
    const getId = (url: string) => {
        const regex = /\d+/g;
        return url.match(regex)?.[0];
    };

    if (searching || (hasSearched && !people.length)) {
        return (
            <div className="mt-4 mx-auto w-full flex justify-center">
                <span className="text-sm text-gray-700 dark:text-gray-500">
                    {searching ? 'Searching...' : 'No results found found'}
                </span>
            </div>
        );
    }

    return (
        <div className="mx-auto w-full flex flex-col items-center justify-center">
            <ul>
                {people?.map((person, index) => (
                    <Link href={`/profile/${getId(person.url)}`} key={index}>
                        <li className="cursor-pointer h-full px-4 py-2 my-2 border-2 rounded-lg flex items-center justify-center text-center w-full hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500 w-72 text-bold">
                            <span>{person.name}</span>
                        </li>
                    </Link>
                ))}
            </ul>
            {people.length ? (
                <div
                    onClick={clearSearch}
                    className="cursor-pointer text-red-500 hover:text-red-700 transition-all duration-500"
                >
                    Clear
                </div>
            ) : null}
        </div>
    );
};

export default PeopleList;

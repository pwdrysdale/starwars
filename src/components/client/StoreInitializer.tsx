'use client';

import { useRef } from 'react';

import usePeopleStore from '@/store/peopleStore';
import { PeopleRoutesType, Person } from '@/interfaces';

const StoreInitializer = ({
    searchText,
    data,
    loading,
    error,
}: {
    searchText: string;
    data: Map<PeopleRoutesType, Person>;
    loading: Map<PeopleRoutesType, boolean>;
    error: boolean;
}) => {
    const initiaized = useRef(false);
    if (!initiaized.current) {
        usePeopleStore.setState({
            searchText,
            data,
            loading,
            error,
        });
        initiaized.current = true;

        return null;
    }
};

export default StoreInitializer;

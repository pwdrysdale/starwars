import React, { FC, Suspense } from 'react';

import usePersonStore from '@/store/peopleStore';
import {
    useSpeciesStore,
    useHomeworldsStore,
    useStarshipsStore,
    useVehicleStore,
} from '@/store/additionalResources';
import ContentBlock from '@/app/profile/[id]/ContentBlock';
import { PeopleRoutesType } from '@/interfaces';
import BackButton from '@/components/client/BackButton';
import SpeciesContent from '@/app/profile/[id]/SpeciesContent';
import StarshipsContent from '@/app/profile/[id]/StarshipsContent';
const FilmsContent = React.lazy(
    () => import('@/app/profile/[id]/FilmsContent'),
);

interface IdProps {
    id: string;
}

const Id: FC<IdProps> = async ({ id }) => {
    const person = id
        ? await usePersonStore
              .getState()
              .get(`https://swapi.dev/api/people/${id}/` as PeopleRoutesType)
        : undefined;
    const vehicles = person
        ? await useVehicleStore.getState().getList(person?.vehicles)
        : [];
    const homeworld = person
        ? await useHomeworldsStore.getState().get(person?.homeworld)
        : undefined;

    console.log('home world', { homeworld, p: person?.homeworld, person });

    return (
        <div className="py-8">
            <h1 className="font-sw">{person?.name}</h1>
            <div className="grid grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <Suspense fallback={<div>Loading...</div>}>
                    <FilmsContent person={person} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <SpeciesContent person={person} />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <StarshipsContent person={person} />
                </Suspense>
                <ContentBlock title="Vehicles" content={vehicles} />
                <ContentBlock title="Homeworld">
                    <span>{homeworld?.name}</span>
                </ContentBlock>
            </div>
            <div className="mt-8">
                <BackButton />
            </div>
        </div>
    );
};

export default Id;

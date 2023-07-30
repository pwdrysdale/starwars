import React, { FC, Suspense } from "react"

import usePersonStore from "@/store/peopleStore"
import {
    useHomeworldsStore,
    useVehicleStore,
} from "@/store/additionalResources"
import ContentBlock from "@/app/profile/[id]/ContentBlock"
import { PeopleRoutesType } from "@/interfaces"
import BackButton from "@/components/client/BackButton"
import SpeciesContent from "@/app/profile/[id]/SpeciesContent"
import StarshipsContent from "@/app/profile/[id]/StarshipsContent"
import Loader from "@/components/server/Loader"
import { toUpperCase, toTitleCase } from "@/utils/utils"
const FilmsContent = React.lazy(() => import("@/app/profile/[id]/FilmsContent"))

interface IdProps {
    id: string
}

const Id: FC<IdProps> = async ({ id }) => {
    const person = id
        ? await usePersonStore
              .getState()
              .get(`https://swapi.dev/api/people/${id}/` as PeopleRoutesType)
        : undefined
    const vehicles = person
        ? await useVehicleStore.getState().getList(person?.vehicles)
        : []
    const homeworld = person
        ? await useHomeworldsStore.getState().get(person?.homeworld)
        : undefined

    return (
        <div className="py-8">
            <h1 className="font-sw">{person?.name}</h1>
            <div className="my-4">
                <h4>Basic Information</h4>
                <ul>Gender: {toUpperCase(person.gender)}</ul>
                <ul>Height: {person.height}</ul>
                <ul>Weight: {person.mass}</ul>
                <ul>Hair Color: {toTitleCase(person.hair_color)}</ul>
                <ul>Skin Color: {toTitleCase(person.skin_color)}</ul>
                <ul>Eye Color: {toTitleCase(person.eye_color)}</ul>
                <ul>Birth Year: {person.birth_year}</ul>
            </div>
            <div className="grid gap-5 cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Suspense fallback={<Loader />}>
                    <FilmsContent person={person} />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <SpeciesContent person={person} />
                </Suspense>
                <Suspense fallback={<Loader />}>
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
    )
}

export default Id

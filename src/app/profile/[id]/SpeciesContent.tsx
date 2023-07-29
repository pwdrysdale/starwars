import { FC } from 'react';
import { Person } from '@/interfaces';
import { useSpeciesStore } from '@/store/additionalResources';
import ContentBlock from '@/app/profile/[id]/ContentBlock';

interface SpeciesContentProps {
    person: Person | undefined;
}

const SpeciesContent: FC<SpeciesContentProps> = async ({ person }) => {
    const species = person
        ? await useSpeciesStore.getState().getList(person?.species)
        : [];

    return (
        <ContentBlock title="Species">
            {species.length
                ? species.map(specie => specie.name).join(', ')
                : 'This person does not have a listed species. '}
        </ContentBlock>
    );
};

export default SpeciesContent;

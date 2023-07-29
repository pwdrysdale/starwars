import { FC } from 'react';
import { Person } from '@/interfaces';
import { useStarshipsStore } from '@/store/additionalResources';
import ContentBlock from '@/app/profile/[id]/ContentBlock';

interface StarshipsContentProps {
    person: Person | undefined;
}

const StarshipsContent: FC<StarshipsContentProps> = async ({ person }) => {
    const starships = person
        ? await useStarshipsStore.getState().getList(person?.starships)
        : [];

    return (
        <ContentBlock title="Starships">
            {starships.length
                ? starships.map(starship => starship.name).join(', ')
                : 'This person does not have a listed starships. '}
        </ContentBlock>
    );
};

export default StarshipsContent;

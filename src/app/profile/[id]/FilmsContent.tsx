import { FC } from 'react';
import { Person } from '@/interfaces';
import { useFilmsStore } from '@/store/additionalResources';
import ContentBlock from '@/app/profile/[id]/ContentBlock';

interface FilmsContentProps {
    person: Person | undefined;
}

const FilmsContent: FC<FilmsContentProps> = async ({ person }) => {
    const films = person
        ? await useFilmsStore.getState().getList(person?.films)
        : [];

    return (
        <ContentBlock title="Films">
            {films.length ? (
                <ul className="list-disc list-inside">
                    {films
                        .sort((a, b) => a.episode_id - b.episode_id)
                        .map((film, index) => (
                            <li key={index}>
                                {film.title} ({film.release_date})
                            </li>
                        ))}
                </ul>
            ) : (
                'This person does not have a listed films. '
            )}
        </ContentBlock>
    );
};

export default FilmsContent;

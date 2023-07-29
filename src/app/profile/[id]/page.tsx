import { lazy, Suspense, FC } from 'react';

const Id = lazy(() => import('@/app/profile/[id]/Id'));

const Page: FC = ({ params }: any) => {
    const { id } = params;

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Id id={id} />
            </Suspense>
        </div>
    );
};

export default Page;

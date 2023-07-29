'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

const BackButton: FC = () => {
    const router = useRouter();

    return (
        <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => router.back()}
        >
            Back
        </button>
    );
};

export default BackButton;

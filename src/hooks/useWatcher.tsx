// a watcher, that watches a value and after a certain time it calls a function. it also has an instant set function
import { useEffect, useState } from 'react';

const useWatcher = (value: any, time: number, callback: () => void) => {
    const [timer, setTimer] = useState<any>(null);

    useEffect(() => {
        if (timer) {
            clearTimeout(timer);
        }

        setTimer(
            setTimeout(() => {
                callback();
            }, time),
        );
    }, [value]);
};

export default useWatcher;

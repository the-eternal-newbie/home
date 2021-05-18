import { useState, useEffect } from 'react';
import { sizes } from '../styles/_sizes';

const useMatchMedia = (): [mediaSize: string, setMediaSize: (arg0: string) => void] => {
    const [mediaSize, setMediaSize] = useState('');

    const checkScreenSize = () => {
        Object.keys(sizes).map((size: string) => {
            if (!size.includes('Max'))
                window
                    .matchMedia(`(max-width: ${sizes[size]}`)
                    .addEventListener('change', data => data.matches && setMediaSize(size));
            else
                window
                    .matchMedia(`(min-width: ${sizes[size]}`)
                    .addEventListener('change', data => data.matches && setMediaSize(size));
        });
    };
    useEffect(() => {
        checkScreenSize();
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return [mediaSize, setMediaSize];
};

export default useMatchMedia;

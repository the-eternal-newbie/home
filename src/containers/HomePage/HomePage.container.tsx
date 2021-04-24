import React, { useEffect } from 'react';
import HomePage from './HomePage';

const HomePageContainer: React.FC = () => {
    useEffect(() => {
        document.title = 'the eternal newbie';
    });

    return <HomePage />;
};

export default HomePageContainer;

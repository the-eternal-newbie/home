import React from 'react';
import Portrait from '../../../components/Portrait/Portrait';

const AboutStrip: React.FC = () => {
    return (
        <section style={{ width: '100%' }}>
            <Portrait size={'large'} variation={'circle'} filter={'greyscale'} url={''} />
        </section>
    );
};

export default AboutStrip;

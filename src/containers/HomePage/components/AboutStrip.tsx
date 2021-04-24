import React from 'react';
import Portrait from '../../../components/Portrait/Portrait';
import Text from '../../../components/Text/Text';
import { AboutSection } from '../HomePage.styled';

const AboutStrip: React.FC = () => {
    return (
        <AboutSection>
            <Portrait size={'large'} variation={'circle'} filter={'greyscale'} url={''} />
            <div>
                <Text
                    id={'Generic.Greetings'}
                    style={{
                        fontSize: '100px',
                        fontWeight: 600,
                        letterSpacing: '0.8px',
                    }}
                />
            </div>
        </AboutSection>
    );
};

export default AboutStrip;

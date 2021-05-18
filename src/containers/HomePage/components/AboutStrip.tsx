import React from 'react';
import Portrait from '../../../components/Portrait/Portrait';
import Text from '../../../components/Text/Text';
import { colors } from '../../../utils/styles/_colors';
import { AboutContainer, AboutSection } from '../HomePage.styled';
import profile from '../../../utils/media/profile.png';

const AboutStrip: React.FC = () => {
    return (
        <AboutSection>
            <AboutContainer>
                <Text
                    id={'Generic.Greetings'}
                    style={{
                        color: colors.greyblack,
                        fontSize: '20px',
                        fontWeight: 700,
                        letterSpacing: 0,
                        wordSpacing: 0,
                        marginBottom: 0,
                    }}
                />
                <Text
                    id={'About.Title'}
                    style={{
                        color: colors.greyblack,
                        fontSize: '22px',
                        fontWeight: 800,
                        letterSpacing: 0,
                        lineHeight: 1.2,
                        marginTop: 10,
                        maxWidth: '300px',
                    }}
                />
                <Text
                    id={'About.Content.Short'}
                    style={{
                        color: colors.greyblack,
                        fontSize: '16px',
                        fontWeight: 300,
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: 1.4,
                        minWidth: '200px',
                        maxWidth: '380px',
                    }}
                />
            </AboutContainer>
            <Portrait variation={'square'} size={'large'} filter={'normal'} url={profile} />
        </AboutSection>
    );
};

export default AboutStrip;

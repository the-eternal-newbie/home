import React from 'react';
import Button from '../../../components/Button/Button';
import Portrait from '../../../components/Portrait/Portrait';
import Text from '../../../components/Text/Text';
import { colors } from '../../../utils/styles/_colors';
import { AboutBox, AboutContainer, AboutSection } from '../HomePage.styled';

const AboutStrip: React.FC = () => {
    return (
        <AboutSection>
            <AboutContainer>
                <Portrait size={'large'} variation={'circle'} filter={'greyscale'} url={''} />
                <AboutBox>
                    <Text
                        id={'Generic.Greetings'}
                        style={{
                            fontSize: '100px',
                            fontWeight: 600,
                            letterSpacing: '0.8px',
                            marginBottom: '45px',
                        }}
                    />
                    <Text
                        id={'About.Title'}
                        style={{
                            fontSize: '22px',
                            fontWeight: 600,
                            letterSpacing: '0.8px',
                        }}
                    />
                    <Text
                        id={'About.Content.Short'}
                        style={{
                            fontSize: '16px',
                            fontWeight: 300,
                            fontFamily: "'Montserrat', sans-serif",
                            letterSpacing: '0.8px',
                            minWidth: '200px',
                            maxWidth: '500px',
                        }}
                    />
                    <div style={{ display: 'flex', width: '95%', justifyContent: 'space-between', marginTop: '20px' }}>
                        <Button
                            navigation
                            to={'/resume'}
                            text={'Generic.Resume'}
                            type={'circle'}
                            style={{
                                width: '140px',
                                height: '140px',
                                backgroundColor: colors.red1,
                                color: colors.white1,
                                fontSize: '16px',
                                fontWeight: 600,
                                textAlign: 'center',
                            }}
                        />
                        <Button
                            navigation
                            to={'/resume'}
                            text={'Generic.Projects'}
                            type={'circle'}
                            style={{
                                width: '140px',
                                height: '140px',
                                backgroundColor: colors.red2,
                                color: colors.white1,
                                fontSize: '16px',
                                fontWeight: 600,
                                textAlign: 'center',
                            }}
                        />
                        <Button
                            navigation
                            to={'/resume'}
                            text={'Generic.Contact'}
                            type={'circle'}
                            style={{
                                width: '140px',
                                height: '140px',
                                backgroundColor: colors.red3,
                                color: colors.white1,
                                fontSize: '16px',
                                fontWeight: 600,
                                textAlign: 'center',
                            }}
                        />
                    </div>
                </AboutBox>
            </AboutContainer>
        </AboutSection>
    );
};

export default AboutStrip;

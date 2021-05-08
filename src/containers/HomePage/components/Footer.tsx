import React from 'react';
import { FooterBox, FooterContact, FooterSection } from '../HomePage.styled';
import Portrait from '../../../components/Portrait/Portrait';
import Text from '../../../components/Text/Text';
import { colors } from '../../../utils/styles/_colors';
import technologies from '../../../utils/media/technologies';

const Footer: React.FC = () => {
    return (
        <FooterSection>
            <Text
                id={'Footer.Made'}
                animation={'fdInBtm'}
                style={{
                    color: colors.yellow2,
                    fontSize: '24px',
                    fontWeight: 600,
                }}
            />
            <FooterBox>
                {technologies.map((tech, index) => (
                    <>
                        <Portrait
                            key={index}
                            filter={'greyscale'}
                            variation={'square'}
                            size={'small'}
                            url={tech}
                        ></Portrait>
                        {index !== technologies.length - 1 && (
                            <div style={{ width: '2px', height: '180px', backgroundColor: colors.yellow2 }}>&nbsp;</div>
                        )}
                    </>
                ))}
            </FooterBox>
            <FooterContact>
                <div>
                    <Text
                        id={'Footer.Contact.Title'}
                        animation={'fdInBtm'}
                        style={{
                            color: colors.totalwhite,
                            fontSize: '18px',
                            fontWeight: 600,
                        }}
                    />
                    <Text
                        id={'Generic.Phone'}
                        animation={'fdInBtm'}
                        style={{
                            color: colors.totalwhite,
                            fontSize: '12px',
                            fontWeight: 400,
                        }}
                    />
                </div>
            </FooterContact>
        </FooterSection>
    );
};

export default Footer;

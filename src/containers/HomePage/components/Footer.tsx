import React from 'react';
import { FooterBox, FooterSection } from '../HomePage.styled';
import Portrait from '../../../components/Portrait/Portrait';
import Text from '../../../components/Text/Text';
import { colors } from '../../../utils/styles/_colors';
import ts from '../../../utils/media/ts.png';
import rct from '../../../utils/media/react.png';
import stc from '../../../utils/media/styled.png';
import node from '../../../utils/media/node.png';

const Footer: React.FC = () => {
    return (
        <FooterSection>
            <Text
                id={'Footer.Made'}
                animation={'fdInBtm'}
                style={{
                    color: colors.yellow2,
                    fontSize: '35px',
                    fontWeight: 600,
                }}
            />
            <FooterBox>
                <Portrait filter={'greyscale'} variation={'square'} size={'small'} url={ts}></Portrait>
                <Portrait filter={'greyscale'} variation={'square'} size={'small'} url={rct}></Portrait>
                <Portrait filter={'greyscale'} variation={'square'} size={'small'} url={node}></Portrait>
            </FooterBox>
        </FooterSection>
    );
};

export default Footer;

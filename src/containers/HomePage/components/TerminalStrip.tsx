import React from 'react';
import { TerminalSection } from '../HomePage.styled';
import Terminal from '../../../components/Terminal/Terminal';
import Text from '../../../components/Text/Text';
import { colors } from '../../../utils/styles/_colors';
import logo from '../../../newbie.svg';

const TerminalStrip: React.FC = () => {
    return (
        <TerminalSection>
            <img src={logo} width={'150px'} />
            <Text
                id={'Generic.Catchphrase'}
                animation={'fdInBtm'}
                style={{
                    color: colors.yellow2,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '2vw',
                    fontWeight: 800,
                    letterSpacing: '3px',
                    lineHeight: '28px',
                    textAlign: 'center',
                    minWidth: '520px',
                    marginTop: '10px',
                }}
            />
            <Terminal />
        </TerminalSection>
    );
};

export default TerminalStrip;

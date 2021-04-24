import React from 'react';
import { TerminalSection } from '../HomePage.styled';
import Terminal from '../../../components/Terminal/Terminal';
import Text from '../../../components/Text/Text';
import { colors } from '../../../utils/styles/colors';

const TerminalStrip: React.FC = () => {
    return (
        <TerminalSection>
            <Text
                id={'Generic.Catchphrase'}
                style={{
                    color: colors.red3,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '26px',
                    fontWeight: 800,
                    letterSpacing: '3px',
                    lineHeight: '28px',
                    textAlign: 'center',
                    maxWidth: '520px',
                    marginTop: '50px',
                }}
            />
            <Terminal />
        </TerminalSection>
    );
};

export default TerminalStrip;

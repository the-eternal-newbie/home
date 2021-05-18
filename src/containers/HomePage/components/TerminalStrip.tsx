import React from 'react';
import { TerminalSection } from '../HomePage.styled';
import Terminal from '../../../components/Terminal/Terminal';
import Text from '../../../components/Text/Text';
import { colors } from '../../../utils/styles/_colors';

const TerminalStrip: React.FC = () => {
    return (
        <TerminalSection>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    width: '42%',
                    height: '100%',
                    paddingLeft: '46px',
                }}
            >
                {/* <img src={logo} width={'150px'} /> */}
                <Text
                    id={'Generic.Catchphrase'}
                    animation={'fdInBtm'}
                    style={{
                        color: colors.yellow2,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '3.2em',
                        fontWeight: 800,
                        wordSpacing: '-3px',
                        lineHeight: '55px',
                        width: '350px',
                        textAlign: 'left',
                        marginTop: '10px',
                    }}
                />
            </div>
            <div style={{ display: 'flex', height: '90%', width: '65%' }}>
                <Terminal />
            </div>
        </TerminalSection>
    );
};

export default TerminalStrip;

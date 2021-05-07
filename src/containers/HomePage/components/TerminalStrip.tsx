import React from 'react';
import { TerminalSection } from '../HomePage.styled';
import Terminal from '../../../components/Terminal/Terminal';
import Text from '../../../components/Text/Text';
import { colors } from '../../../utils/styles/_colors';
import logo from '../../../newbie.svg';

const TerminalStrip: React.FC = () => {
    return (
        <TerminalSection>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: '30%',
                    height: '100%',
                }}
            >
                {/* <img src={logo} width={'150px'} /> */}
                <Text
                    id={'Generic.Catchphrase'}
                    animation={'fdInBtm'}
                    style={{
                        color: colors.yellow2,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '3vw',
                        fontWeight: 800,
                        lineHeight: '65px',
                        textAlign: 'left',
                        minWidth: '520px',
                        marginTop: '10px',
                    }}
                />
            </div>
            <div style={{ display: 'flex', height: '90%', width: '60%' }}>
                <Terminal />
            </div>
        </TerminalSection>
    );
};

export default TerminalStrip;

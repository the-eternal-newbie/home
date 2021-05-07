import React from 'react';
import Typewriter from 'typewriter-effect';
import { consoleLines } from '../../utils/constants';
import { colors } from '../../utils/styles/_colors';
import {
    Bash,
    Dot,
    DotContainer,
    TerminalFrame,
    TerminalHeader,
    TerminalTextHeader,
    TypeWriter,
} from './Terminal.styled';

const Terminal: React.FC = () => {
    return (
        <TerminalFrame>
            <TerminalHeader>
                <DotContainer>
                    <Dot style={{ background: colors.red2 }} />
                    <Dot style={{ background: colors.yellow2 }} />
                    <Dot style={{ background: colors.green1 }} />
                </DotContainer>
                <TerminalTextHeader>/home/the-eternal-newbie/development/portfolio/</TerminalTextHeader>
            </TerminalHeader>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '45%', height: '100%' }}>
                    <Bash>
                        <p style={{ display: 'inline', color: colors.green1 }}>&#8594; </p>
                        <p style={{ display: 'inline', color: colors.blue1 }}>~ </p>
                        <p style={{ display: 'inline', color: colors.purple1 }}>ll</p>
                    </Bash>
                    <br />
                    <Bash>
                        <p style={{ display: 'inline', color: colors.white1 }}>total 3 </p>
                        <p style={{ display: 'inline', color: colors.white1 }}>
                            <pre>{'drwxr-xr-x   22 the-eternal-newbie'} </pre>
                        </p>
                        <p style={{ display: 'inline', color: colors.purple1 }}>ll</p>
                    </Bash>
                    <br />
                </div>
                {/* <div
                    style={{
                        borderLeft: `2px solid ${colors.white2}`,
                        height: '49%',
                        position: 'absolute',
                        marginTop: '-18px',
                        marginLeft: '440px',
                    }}
                ></div> */}
                <div
                    style={{
                        width: '50%',
                        height: '100%',
                        paddingLeft: '18px',
                    }}
                >
                    <Bash>
                        <p style={{ display: 'inline', color: colors.green1 }}>&#8594; </p>
                        <p style={{ display: 'inline', color: colors.blue1 }}>~ </p>
                        <p style={{ display: 'inline', color: colors.green1 }}>pwd</p>
                    </Bash>
                    <br />
                    <Bash>
                        <p style={{ display: 'inline', color: colors.white1 }}>/home/the-eternal-newbie/</p>
                    </Bash>
                    <br />
                    <Bash>
                        <p style={{ display: 'inline', color: colors.green1 }}>&#8594; </p>
                        <p style={{ display: 'inline', color: colors.blue1 }}>~ </p>
                        <p style={{ display: 'inline', color: colors.green1, textDecoration: 'underline' }}>
                            development/portfolio
                        </p>
                    </Bash>
                    <br />
                    <Bash>
                        <p style={{ display: 'inline', color: colors.green1 }}>&#8594; </p>
                        <p style={{ display: 'inline', color: colors.blue1 }}>portfolio </p>
                        <p style={{ display: 'inline', color: colors.pink2 }}> git:(</p>
                        <p style={{ display: 'inline', color: colors.red3 }}>master</p>
                        <p style={{ display: 'inline', color: colors.pink2 }}>)</p>
                        <p style={{ display: 'inline', color: colors.yellow2 }}> ✘</p>
                        <p style={{ display: 'inline', color: colors.purple1 }}> vim </p>
                        <p style={{ display: 'inline', color: colors.white1 }}> helloworld </p>
                    </Bash>
                    <TypeWriter>
                        <Typewriter
                            onInit={typewriter => {
                                typewriter.pauseFor(2500).deleteAll().start();
                            }}
                            options={{ loop: true, strings: consoleLines, autoStart: true }}
                        />
                    </TypeWriter>
                </div>
            </div>
        </TerminalFrame>
    );
};

export default Terminal;

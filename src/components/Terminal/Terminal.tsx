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
            <div>
                <Bash>
                    <p style={{ display: 'inline', color: colors.green1 }}>🠪 </p>
                    <p style={{ display: 'inline', color: colors.blue1 }}>~ </p>
                    <p style={{ display: 'inline', color: colors.green1 }}>pwd</p>
                </Bash>
                <br />
                <Bash>
                    <p style={{ display: 'inline', color: colors.white1 }}>/home/the-eternal-newbie/</p>
                </Bash>
                <br />
                <Bash>
                    <p style={{ display: 'inline', color: colors.green1 }}>🠪 </p>
                    <p style={{ display: 'inline', color: colors.blue1 }}>~ </p>
                    <p style={{ display: 'inline', color: colors.green1, textDecoration: 'underline' }}>
                        development/portfolio
                    </p>
                </Bash>
                <br />
                <Bash>
                    <p style={{ display: 'inline', color: colors.green1 }}>🠪 </p>
                    <p style={{ display: 'inline', color: colors.blue1 }}>portfolio </p>
                    <p style={{ display: 'inline', color: colors.pink2 }}> git:(</p>
                    <p style={{ display: 'inline', color: colors.red3 }}>master</p>
                    <p style={{ display: 'inline', color: colors.pink2 }}>)</p>
                    <p style={{ display: 'inline', color: colors.yellow2 }}> ✘</p>
                    <p style={{ display: 'inline', color: colors.purple1 }}> vim </p>
                    <p style={{ display: 'inline', color: colors.white1 }}> helloworld </p>
                </Bash>
            </div>
            <TypeWriter>
                <Typewriter
                    onInit={typewriter => {
                        typewriter.pauseFor(2500).deleteAll().start();
                    }}
                    options={{ loop: true, strings: consoleLines, autoStart: true }}
                />
            </TypeWriter>
        </TerminalFrame>
    );
};

export default Terminal;

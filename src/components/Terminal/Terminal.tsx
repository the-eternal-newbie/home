import React from 'react';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { consoleLines } from '../../utils/constants';
import { colors } from '../../utils/styles/_colors';
import { NavElementLink } from '../MenuBar/MenuBar.styled';
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
    const date = new Date();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const strTime = `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
    const strDate = `${monthNames[date.getMonth()]} ${date.getDay()}  ${strTime}`;
    const [showList, setShowList] = useState(false);
    const [showVim, setShowVim] = useState(false);
    const [showTW, setShowTW] = useState(false);
    return (
        <TerminalFrame>
            <TerminalHeader>
                <DotContainer>
                    <Dot style={{ background: colors.red2 }} />
                    <Dot style={{ background: colors.yellow2 }} />
                    <Dot style={{ background: colors.green1 }} />
                </DotContainer>
                <TerminalTextHeader>/home/the-eternal-newbie/interactive/terminal/</TerminalTextHeader>
            </TerminalHeader>
            <div>
                <Bash>
                    <p style={{ display: 'inline', color: colors.green1 }}>&#8594; </p>
                    <p style={{ display: 'inline', color: colors.blue1 }}>~ </p>
                    <span style={{ display: 'inline-block', height: '1px' }}>
                        <Typewriter
                            onInit={typewriter => {
                                typewriter
                                    .changeDelay(100)
                                    .typeString(`<p style="display: inline; color: ${colors.purple1}">ll</p>`)
                                    .start()
                                    .pauseFor(600)
                                    .callFunction(() => setShowList(true));
                            }}
                            options={{ cursor: '' }}
                        />
                    </span>
                </Bash>
                {showList && (
                    <>
                        <Bash>
                            <p style={{ display: 'inline', color: colors.white1 }}>
                                <pre style={{ fontSize: '1.2em' }}>
                                    {`total 4
drwxr-xr-x  22  the-eternal-newbie  staff  704B  ${strDate}  `}
                                    <NavElementLink style={{ padding: 0 }} to="/contact">
                                        <p style={{ display: 'inline', color: colors.blue1 }}>contact </p>
                                    </NavElementLink>
                                    {`
drwxr-xr-x  14  the-eternal-newbie  staff  448B  ${strDate}  `}
                                    <NavElementLink style={{ padding: 0 }} to="/portfolio">
                                        <p style={{ display: 'inline', color: colors.blue1 }}>portfolio </p>
                                    </NavElementLink>
                                    {`
drwxr-xr-x  15  the-eternal-newbie  staff  480B  ${strDate}  `}
                                    <NavElementLink style={{ padding: 0 }} to="/resume">
                                        <p style={{ display: 'inline', color: colors.blue1 }}>resume </p>
                                    </NavElementLink>
                                    {`
drwxr-xr-x   1  the-eternal-newbie  staff   27B  ${strDate}  `}
                                    <NavElementLink style={{ padding: 0 }} to="/resume">
                                        <p style={{ display: 'inline', color: colors.green1 }}>easter-egg </p>
                                    </NavElementLink>
                                </pre>
                            </p>
                        </Bash>
                        <Bash>
                            <p style={{ display: 'inline', color: colors.green1 }}>&#8594; </p>
                            <p style={{ display: 'inline', color: colors.blue1 }}>~ </p>
                            <span style={{ display: 'inline-block', height: '1px' }}>
                                <Typewriter
                                    onInit={typewriter => {
                                        typewriter
                                            .changeDelay(100)
                                            .typeString(
                                                `<p style="display: inline; color: ${colors.purple1}">cd</p><p style="display: inline; color: ${colors.white1}"> portfolio</p>`,
                                            )
                                            .start()
                                            .pauseFor(600)
                                            .callFunction(() => setShowVim(true));
                                    }}
                                    options={{ cursor: '' }}
                                />
                            </span>
                        </Bash>
                    </>
                )}
                <br />
                {showVim && (
                    <Bash>
                        <p style={{ display: 'inline', color: colors.green1 }}>&#8594; </p>
                        <p style={{ display: 'inline', color: colors.blue1 }}>portfolio </p>
                        <p style={{ display: 'inline', color: colors.pink2 }}> git:(</p>
                        <p style={{ display: 'inline', color: colors.red3 }}>master</p>
                        <p style={{ display: 'inline', color: colors.pink2 }}>)</p>
                        <p style={{ display: 'inline', color: colors.yellow2 }}> ✘ </p>
                        <span style={{ display: 'inline-block', height: '1px' }}>
                            <Typewriter
                                onInit={typewriter => {
                                    typewriter
                                        .changeDelay(100)
                                        .typeString(
                                            `<p style="display: inline; color: ${colors.purple1}">vim</p><p style="display: inline; color: ${colors.white1}"> helloworld</p>`,
                                        )
                                        .start()
                                        .pauseFor(600)
                                        .callFunction(() => setShowTW(true));
                                }}
                                options={{ cursor: '' }}
                            />
                        </span>
                    </Bash>
                )}
                {showTW && (
                    <TypeWriter>
                        <Typewriter
                            onInit={typewriter => {
                                typewriter.pauseFor(2500).deleteAll().start();
                            }}
                            options={{ loop: true, strings: consoleLines, autoStart: true, cursor: '' }}
                        />
                    </TypeWriter>
                )}
            </div>
        </TerminalFrame>
    );
};

export default Terminal;

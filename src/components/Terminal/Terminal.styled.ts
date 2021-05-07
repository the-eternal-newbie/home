import styled from 'styled-components';
import { colors } from '../../utils/styles/_colors';

export const TerminalFrame = styled.div`
    background-color: ${colors.greyblack};
    border-radius: 6px;
    padding-left: 20px;
    padding-top: 30px;
    width: 90%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

export const Dot = styled.p`
    border-radius: 50%;
    width: 10px;
    height: 10px;
`;

export const DotContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50px;
    margin-left: 10px;
`;

export const TerminalHeader = styled.div`
    width: auto;
    height: 24px;
    display: flex;
    align-items: center;
    font-weight: 700;
    border-radius: 4px 4px 0px 0px;
    font-size: 0.75em;
    margin-left: -20px;
    margin-top: -30px;
    margin-bottom: 12px;
    background-color: ${colors.white2};
`;

export const TerminalTextHeader = styled.div`
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const TypeWriter = styled.pre`
    color: ${colors.white1};
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    font-size: 15px;
`;

export const Bash = styled.span`
    font-size: 15px;
    color: ${colors.green1};
    font-weight: 700;
    font-family: 'Roboto Mono', monospace;
`;

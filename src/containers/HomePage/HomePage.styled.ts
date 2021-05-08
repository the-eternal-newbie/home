import styled from 'styled-components';
import { colors } from '../../utils/styles/_colors';

export const TerminalSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const AboutSection = styled.section`
    display: flex;
    background-color: ${colors.totalwhite};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120%;
`;

export const Wave = styled.div`
    position: absolute;
    height: 70px;
    width: 100%;
    background: #e0efe3;
    &:before {
        content: '';
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 340px;
        height: 80px;
        background-color: white;
        right: -5px;
        top: 40px;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 300px;
        height: 70px;
        background-color: #e0efe3;
        left: 0;
        top: 27px;
    }
`;

export const AboutContainer = styled.div`
    max-width: 72%;
    display: flex;
`;

export const AboutBox = styled.div`
    display: flex;
    margin-left: 60px;
    min-width: '200px';
    flex-direction: column;
`;

export const Container = styled.section`
    width: 100%;
    height: 500px;
    margin-bottom: 220px;
`;

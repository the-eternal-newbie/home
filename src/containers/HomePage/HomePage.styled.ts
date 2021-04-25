import styled from 'styled-components';
import { colors } from '../../utils/styles/_colors';

export const TerminalSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const AboutSection = styled.section`
    display: flex;
    background-color: ${colors.white1};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120%;
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

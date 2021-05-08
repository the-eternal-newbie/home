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
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const AboutContainer = styled.div`
    width: auto;
    display: flex;
    padding: 60px 200px;
    flex-direction: column;
    background-color: ${colors.yellow2};
`;

export const FooterSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const FooterBox = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    height: 200px;
`;

export const FooterContact = styled.footer`
    display: flex;
    background-color: ${colors.yellow2};
    width: 88%;
    padding: 60px;
    margin-top: 100px;
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

export const Container = styled.section`
    width: 100%;
    height: 500px;
    margin-bottom: 220px;
`;

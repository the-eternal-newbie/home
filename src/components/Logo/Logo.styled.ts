import styled from 'styled-components';
import { getAnimation } from '../../utils/styles/_animations';
import '../../utils/styles/_fonts.css';

export const LogoContainer = styled.div`
    padding: 10px 40px 16px;
    flex-direction: row;
    align-items: flex-end;
    display: flex;
    max-width: 360px;
    min-width: 180px;
    animation-name: ${getAnimation('fdInBtm')};
    animation-duration: 1s;
    margin-right: auto;
`;

export const Title = styled.p`
    font-size: 28px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
    margin-left: 12px;
    letter-spacing: 1px;
`;

import styled from 'styled-components';
import { colors } from '../../utils/styles/_colors';
import { getAnimation } from '../../utils/styles/_animations';
import '../../utils/styles/_fonts.css';

export const Square = styled.div`
    background-color: ${({ style }) => (style?.color ? style.color : colors.yellow2)};
    display: flex;
    align-items: center;
    height: ${({ style }) => (style?.height ? style.height : '76px')};
    width: ${({ style }) => (style?.width ? style.width : '88px')};
    z-index: 100;
`;

export const LogoContainer = styled.div`
    padding: 30px 30px 10px;
    flex-direction: row;
    align-items: flex-end;
    display: flex;
    position: absolute;
    top: 10px;
    left: 60px;
    max-width: 180px;
    min-width: 80px;
    animation-name: ${getAnimation('fdInBtm')};
    animation-duration: 1s;
`;

export const Title = styled.p`
    font-size: 16px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 10px;
    margin-left: 2px;
    letter-spacing: 1px;
    z-index: 100;
`;

import '../../utils/styles/_fonts.css';
import { colors } from '../../utils/styles/_colors';
import styled from 'styled-components';

export const Square = styled.div`
    background-color: ${colors.yellow2};
    height: ${({ style }) => (style?.height ? style.height : '76px')};
    width: ${({ style }) => (style?.width ? style.width : '88px')};
    z-index: 100;
`;

export const LogoContainer = styled.div`
    padding: 30px 30px 10px;
    flex-direction: row;
    align-items: flex-end;
    display: flex;
    max-width: 1800px;
    min-width: 280px;
`;

export const Title = styled.p`
    font-size: 21px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    line-height: 18.5px;
    letter-spacing: 2.5px;
    position: absolute;
    top: 2px;
    z-index: 100;
`;

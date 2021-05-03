import styled from 'styled-components';
import '../../utils/styles/_fonts.css';
import { colors } from '../../utils/styles/_colors';
import { getAnimation } from '../../utils/styles/_animations';
import { IText } from './Text.types';

export const StyledText = styled.p`
    font-family: ${({ style }) => (style?.fontFamily ? style.fontFamily : "'Work Sans', sans-serif")};
    color: ${({ style }) => (style?.color ? style.color : colors.black)};
    font-style: ${({ style }) => (style?.fontStyle ? style.fontStyle : 'normal')};
    font-size: ${({ style }) => (style?.fontSize ? style.fontSize : '18px')};
    font-weight: ${({ style }) => (style?.fontWeight ? style.fontWeight : '100')};
    line-height: ${({ style }) => (style?.lineHeight ? style.lineHeight : '14px')};
    letter-spacing: ${({ style }) => (style?.letterSpacing ? style.letterSpacing : '1px')};
    animation-name: ${(props: IText) => getAnimation(props.animation)};
    animation-duration: 1s;
`;

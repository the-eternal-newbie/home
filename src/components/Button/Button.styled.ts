import styled from 'styled-components';
import { colors, LightenDarkenColor } from '../../utils/styles/_colors';

export const PrimaryButton = styled.button`
    border-radius: 50%;
`;

export const SecondaryButton = styled.button`
    border-radius: 50%;
`;

export const CircleButton = styled.button`
    border-radius: 50%;
    cursor: pointer;
    border: none;
    &:hover {
        background-color: ${({ style }) =>
            style?.backgroundColor
                ? LightenDarkenColor(style.backgroundColor, -40)
                : LightenDarkenColor(colors.red2, 20)} !important;
    }
`;

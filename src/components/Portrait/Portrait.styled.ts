import styled from 'styled-components';
import { IPortrait } from './Portrait.types';

export const PortraitContainer = styled.img`
    -webkit-filter: grayscale(100%);
    width: ${(props: IPortrait) => (props.size === 'small' ? '120px' : props.size === 'medium' ? '240px' : '480px')};
    border-radius: ${(props: IPortrait) => (props.variation === 'circle' ? '50%' : '0%')};
    filter: ${(props: IPortrait) => (props.filter === 'greyscale' ? 'grayscale(100%)' : 'none')};
`;

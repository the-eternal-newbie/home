import React from 'react';
import { PortraitContainer } from './Portrait.styled';
import { IPortrait } from './Portrait.types';

const GENERIC_PHOTO = 'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg';

const Portrait: React.FC<IPortrait> = (props: IPortrait) => {
    const { filter, variation, size, url } = props;
    return <PortraitContainer variation={variation} filter={filter} size={size} src={url ? url : GENERIC_PHOTO} />;
};

export default Portrait;

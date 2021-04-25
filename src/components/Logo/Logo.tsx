/* eslint-disable indent */
import React from 'react';
import { ILogo } from './Logo.types';
import { LogoContainer, Square, Title } from './Logo.styled';
import Text from '../../components/Text/Text';
import { colors } from '../../utils/styles/_colors';

const Logo: React.FC<ILogo> = (props: ILogo) => {
    const { size } = props;
    const { width, height } =
        size === 'large'
            ? { width: '120px', height: '104px' }
            : size === 'medium'
            ? { width: '62px', height: '58px' }
            : { width: '30px', height: '26px' };
    return (
        <LogoContainer>
            <Square style={{ width: width, height: height, zIndex: 1000 }}>
                <Title>the eternal newbie</Title>
            </Square>
            <Square
                style={{
                    width: width,
                    height: height,
                    color: colors.yellow1,
                    position: 'absolute',
                    left: '16px',
                    top: '18px',
                }}
            />
        </LogoContainer>
    );
};

export default Logo;

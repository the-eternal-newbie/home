/* eslint-disable indent */
import React from 'react';
import { ILogo } from './Logo.types';
import { LogoContainer, Title } from './Logo.styled';
import { colors } from '../../utils/styles/_colors';
import logo from '../../utils/media/TEW.png';

const Logo: React.FC<ILogo> = (props: ILogo) => {
    const { type } = props;
    return (
        <LogoContainer
            style={
                type === 'full'
                    ? { top: '10px', left: '60px' }
                    : { position: 'initial', minWidth: '16%', padding: '0px 2px 10px 0px' }
            }
        >
            {type === 'full' ? (
                <>
                    <img src={logo} alt="" width="73px" />
                    <Title>the eternal newbie</Title>
                </>
            ) : (
                <Title style={{ color: colors.totalwhite, fontSize: '20px', marginLeft: '20px' }}>
                    the eternal newbie
                </Title>
            )}
        </LogoContainer>
    );
};

export default Logo;

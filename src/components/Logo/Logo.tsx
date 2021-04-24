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
            ? { width: '176px', height: '154px' }
            : size === 'medium'
            ? { width: '88px', height: '76px' }
            : { width: '44px', height: '38px' };
    return (
        <LogoContainer>
            <Square style={{ width: width, height: height }} />
            <Square
                style={{ width: width, height: height, opacity: 0.4, position: 'absolute', left: '40px', top: '16px' }}
            />
            <Title>
                the
                <br />
                eternal
                <br />
                newbie
            </Title>
            <Text
                id={'Resume.Job.Position'}
                animation={'fdInLft'}
                style={{
                    color: colors.grey2,
                    lineHeight: '1px',
                    fontSize: '16px',
                    fontStyle: 'italic',
                    letterSpacing: '0px',
                    marginLeft: '12px',
                }}
            />
        </LogoContainer>
    );
};

export default Logo;

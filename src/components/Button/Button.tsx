import React from 'react';
import { NavLink } from 'react-router-dom';
import Text from '../Text/Text';
import { CircleButton, PrimaryButton, SecondaryButton } from './Button.styled';
import { IButton } from './Button.types';

const Button: React.FC<IButton> = (props: IButton) => {
    const { onClick, type, style, navigation, text, to } = props;

    const getButtonType = () => {
        const textData = (
            <Text id={text} style={{ color: style?.color, fontSize: style?.fontSize, fontWeight: style?.fontWeight }} />
        );
        switch (type) {
            case 'primary':
                return (
                    <PrimaryButton style={style} onClick={onClick}>
                        {textData}
                    </PrimaryButton>
                );
            case 'secondary':
                return (
                    <SecondaryButton style={style} onClick={onClick}>
                        {textData}
                    </SecondaryButton>
                );
            case 'circle':
                return (
                    <CircleButton style={style} onClick={onClick}>
                        {textData}
                    </CircleButton>
                );
            default:
                return <button onClick={onClick} />;
        }
    };

    return navigation && to ? <NavLink to={to}>{getButtonType()}</NavLink> : getButtonType();
};

export default Button;

import React from 'react';
import { MenuBarContainer } from './MenuBar.styled';
import Logo from '../Logo/Logo';

const MenuBar: React.FC = () => {
    return (
        <MenuBarContainer>
            <Logo type={'full'} size={'medium'} />
        </MenuBarContainer>
    );
};

export default MenuBar;

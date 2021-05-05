import React from 'react';
import { useState } from 'react';
import { Hamburger, HamburgerBar, SideBarContainer } from './SideBar.styled';

const SideBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    return open ? (
        <SideBarContainer>
            <p>Test</p>
        </SideBarContainer>
    ) : (
        <Hamburger onClick={() => setOpen(true)}>
            <HamburgerBar>&nbsp;</HamburgerBar>
            <HamburgerBar>&nbsp;</HamburgerBar>
            <HamburgerBar>&nbsp;</HamburgerBar>
        </Hamburger>
    );
};

export default SideBar;

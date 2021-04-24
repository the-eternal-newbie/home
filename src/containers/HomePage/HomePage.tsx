import React from 'react';
import TerminalStrip from './components/TerminalStrip';
import AboutStrip from './components/AboutStrip';
import MenuBar from '../../components/MenuBar/MenuBar';
import { Container } from './HomePage.styled';

const HomePage: React.FC = () => {
    return (
        <>
            <MenuBar />
            <Container>
                <TerminalStrip />
            </Container>
            <Container>
                <AboutStrip />
            </Container>
        </>
    );
};

export default HomePage;

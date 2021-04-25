import React from 'react';
import TerminalStrip from './components/TerminalStrip';
import AboutStrip from './components/AboutStrip';
import { Container } from './HomePage.styled';

const HomePage: React.FC = () => {
    return (
        <>
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

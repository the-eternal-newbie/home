import React from 'react';
import TerminalStrip from './components/TerminalStrip';
import AboutStrip from './components/AboutStrip';
import { Container } from './HomePage.styled';

const HomePage: React.FC = () => {
    return (
        <>
            <Container style={{ height: '600px' }}>
                <TerminalStrip />
            </Container>
            <Container>
                <AboutStrip />
            </Container>
        </>
    );
};

export default HomePage;

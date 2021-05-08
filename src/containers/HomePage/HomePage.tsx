import React from 'react';
import TerminalStrip from './components/TerminalStrip';
import AboutStrip from './components/AboutStrip';
import { Container } from './HomePage.styled';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
    return (
        <>
            <Container style={{ height: '600px' }}>
                <TerminalStrip />
            </Container>
            <Container>
                <AboutStrip />
            </Container>
            <Container>
                <Footer />
            </Container>
        </>
    );
};

export default HomePage;

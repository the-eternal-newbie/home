import React from 'react';
import { connect } from 'react-redux';
import TerminalStrip from './components/TerminalStrip';
import { setLang } from '../../utils/redux/actions';
import MenuBar from '../../components/MenuBar/MenuBar';
import { store } from '../../utils/redux/store';
import { Container } from './HomePage.styled';

const HomePage: React.FC<{ lang?: string }> = (props: { lang?: string }) => {
    const { lang } = props;
    return (
        <>
            <MenuBar />
            <Container>
                <TerminalStrip />
                <p>{lang}</p>
                <button onClick={() => store.dispatch(setLang('es'))}>ES</button>
                <button onClick={() => store.dispatch(setLang('en'))}>EN</button>
            </Container>
        </>
    );
};
// export default HomePageContainer;
function mapStateToProps(state: { lang: string }) {
    const lang = state.lang;
    return { lang };
}

export default connect(mapStateToProps)(HomePage);

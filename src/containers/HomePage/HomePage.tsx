import React from 'react';
import { connect } from 'react-redux';
import { setLang } from '../../utils/redux/actions';
import store from '../../utils/redux/store';
import Text from '../../components/Text/Text';

const HomePage: React.FC<{ lang?: string }> = (props: { lang?: string }) => {
    const { lang } = props;
    return (
        <>
            <Text />
            <p>{lang}</p>
            <button onClick={() => store.dispatch(setLang('es'))}>ES</button>
            <button onClick={() => store.dispatch(setLang('en'))}>EN</button>
        </>
    );
};
// export default HomePageContainer;
function mapStateToProps(state: { lang: string }) {
    const lang = state.lang;
    return { lang };
}

export default connect(mapStateToProps)(HomePage);

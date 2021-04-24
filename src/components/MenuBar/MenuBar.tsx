import React from 'react';
import { connect } from 'react-redux';
import { MenuBarContainer, NavBar, NavContainer, NavElement, NavElementLink } from './MenuBar.styled';
import Logo from '../Logo/Logo';
import Text from '../Text/Text';
import { store } from '../../utils/redux/store';
import { setLang } from '../../utils/redux/actions';
import { colors } from '../../utils/styles/_colors';

const MenuBar: React.FC = () => {
    return (
        <MenuBarContainer>
            <Logo type={'full'} size={'medium'} />
            <NavContainer>
                <div style={{ marginRight: '25px' }}>
                    <NavElement onClick={() => store.dispatch(setLang('es'))}>ES</NavElement>
                    <NavElement onClick={() => store.dispatch(setLang('en'))}>EN</NavElement>
                </div>
                <NavBar>
                    <NavElementLink style={{ borderRight: '1px solid black' }} to="/contact">
                        <Text
                            id={'Generic.Contact'}
                            style={{ color: colors.greyblack, margin: '0px', fontSize: '14px' }}
                        />
                    </NavElementLink>
                    <NavElementLink style={{ borderRight: '1px solid black' }} to="/projects">
                        <Text
                            id={'Generic.Projects'}
                            style={{ color: colors.greyblack, margin: '0px', fontSize: '14px' }}
                        />
                    </NavElementLink>
                    <NavElementLink to="/resume">
                        <Text id={'Generic.Resume'} style={{ color: colors.greyblack, fontSize: '14px' }} />
                    </NavElementLink>
                </NavBar>
            </NavContainer>
        </MenuBarContainer>
    );
};

// export default HomePageContainer;
function mapStateToProps(state: { lang: string }) {
    const lang = state.lang;
    return { lang };
}

export default connect(mapStateToProps)(MenuBar);

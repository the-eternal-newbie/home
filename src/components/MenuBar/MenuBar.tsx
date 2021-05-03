import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { supportedLanguages } from '../../utils/i18n/index';
import { usaFlag, mexicoFlag } from '../../utils/icons/flags/index';
import {
    LangContainer,
    Line,
    MenuBarContainer,
    NavBar,
    NavContainer,
    NavElement,
    NavElementLink,
} from './MenuBar.styled';
import Logo from '../Logo/Logo';
import Text from '../Text/Text';
import { store } from '../../utils/redux/store';
import { setLang } from '../../utils/redux/actions';
import { colors } from '../../utils/styles/_colors';
import { IMenuBar } from './MenuBar.types';
import { CSSProperties } from 'styled-components';

const MenuBar: React.FC<IMenuBar> = (props: IMenuBar) => {
    const { lang } = props;
    const [displayHome, setDisplayHome] = useState(false);
    const matchCountry = (lang: string) => {
        switch (lang) {
            case 'en':
                return usaFlag;
            case 'es':
                return mexicoFlag;
            default:
                break;
        }
    };
    const borderStyle = (index: number): CSSProperties => {
        return index == supportedLanguages.length - 1
            ? {
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius: '4px',
              }
            : index === 0
            ? {
                  borderTopLeftRadius: '4px',
                  borderBottomLeftRadius: '4px',
              }
            : {};
    };
    useEffect(() => {
        if (window.location.href.substring(window.location.href.length - 2, window.location.href.length) !== '#/')
            setDisplayHome(true);
        else setDisplayHome(false);
    }, []);
    return (
        <MenuBarContainer>
            <Logo type={'full'} size={'medium'} />
            <NavContainer>
                <NavBar>
                    <NavElementLink
                        style={{ display: displayHome ? 'block' : 'none' }}
                        onClick={() => setDisplayHome(false)}
                        to="/"
                    >
                        <Text
                            id={'Generic.Home'}
                            animation={'fdInLft'}
                            style={{ color: colors.grey3, margin: '0px', fontSize: '12px' }}
                        />
                    </NavElementLink>
                    <NavElementLink onClick={() => setDisplayHome(true)} to="/contact">
                        <Text
                            id={'Generic.Contact'}
                            animation={'fdInLft'}
                            style={{ color: colors.grey3, margin: '0px', fontSize: '12px' }}
                        />
                    </NavElementLink>
                    <NavElementLink onClick={() => setDisplayHome(true)} to="/projects">
                        <Text
                            id={'Generic.Projects'}
                            animation={'fdInLft'}
                            style={{ color: colors.grey3, margin: '0px', fontSize: '12px' }}
                        />
                    </NavElementLink>
                    <NavElementLink onClick={() => setDisplayHome(true)} to="/resume">
                        <Text
                            id={'Generic.Resume'}
                            animation={'fdInLft'}
                            style={{ color: colors.grey3, margin: '0px', fontSize: '12px' }}
                        />
                    </NavElementLink>
                </NavBar>
                <LangContainer>
                    {supportedLanguages.map((langOpt, index) => (
                        <div
                            key={`${index}${lang}-menu`}
                            style={{
                                backgroundColor: langOpt === lang ? colors.grey4 : colors.white1,
                                width: '50%',
                                ...borderStyle(index),
                            }}
                        >
                            <img src={matchCountry(langOpt)} width={'14px'} style={{ marginLeft: '6px' }} />
                            <NavElement
                                style={{ color: langOpt === lang ? colors.white1 : colors.grey4 }}
                                onClick={() => store.dispatch(setLang(langOpt))}
                            >
                                {langOpt.toUpperCase()}
                            </NavElement>
                        </div>
                    ))}
                </LangContainer>
            </NavContainer>
            <Line />
        </MenuBarContainer>
    );
};

// export default HomePageContainer;
function mapStateToProps(state: { lang: string }) {
    const lang = state.lang;
    return { lang };
}

export default connect(mapStateToProps)(MenuBar);

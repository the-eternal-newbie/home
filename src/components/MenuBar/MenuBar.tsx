import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { CSSProperties } from 'styled-components';
import { supportedLanguages } from '../../utils/i18n/index';
import { usaFlag, mexicoFlag } from '../../utils/icons/flags/index';
import useMatchMedia from '../../utils/hooks/useMatchMedia';
import {
    LangContainer,
    Line,
    MenuBarContainer,
    MenuBarCollapsed,
    NavBar,
    NavContainer,
    NavElementLink,
} from './MenuBar.styled';
import Logo from '../Logo/Logo';
import Text from '../Text/Text';
import { store } from '../../utils/redux/store';
import { setLang } from '../../utils/redux/actions';
import { colors } from '../../utils/styles/_colors';
import { IMenuBar } from './MenuBar.types';
import SideBar from '../SideBar/SideBar';

const MenuBar: React.FC<IMenuBar> = (props: IMenuBar) => {
    const { lang } = props;
    const [mediaSize] = useMatchMedia();
    const menuBar = useRef<HTMLDivElement>(null);
    const [displayHome, setDisplayHome] = useState(false);

    const [sticky, setSticky] = useState(false);

    const logit = () =>
        window.pageYOffset > 80
            ? !sticky && setSticky(true)
            : menuBar.current && menuBar.current.offsetTop === window.pageYOffset && setSticky(false);

    useEffect(() => {
        if (window.location.href.substring(window.location.href.length - 2, window.location.href.length) !== '#/')
            setDisplayHome(true);
        else setDisplayHome(false);
        const watchScroll = () => {
            window.addEventListener('scroll', logit);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', logit);
        };
    });

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

    return (
        <>
            <div ref={menuBar} style={sticky ? MenuBarCollapsed : MenuBarContainer}>
                <Logo type={sticky ? 'minimal' : 'full'} size={'medium'} />
                <NavContainer
                    style={
                        sticky
                            ? {
                                  width: '85%',
                              }
                            : {
                                  margin: '28px 10px 4px 160px',
                              }
                    }
                >
                    {mediaSize === 'mediaSmall' || mediaSize === 'mediaXsmall' || mediaSize === 'mediaMedium' ? (
                        <SideBar />
                    ) : (
                        <NavBar>
                            <NavElementLink
                                style={{ display: displayHome ? 'block' : 'none' }}
                                onClick={() => setDisplayHome(false)}
                                to="/"
                            >
                                <Text
                                    id={'Generic.Home'}
                                    animation={'fdInLft'}
                                    style={{
                                        color: sticky ? colors.totalwhite : colors.yellow2,
                                        margin: '0px',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                    }}
                                />
                            </NavElementLink>
                            <NavElementLink onClick={() => setDisplayHome(true)} to="/contact">
                                <Text
                                    id={'Generic.Contact'}
                                    animation={'fdInLft'}
                                    style={{
                                        color: sticky ? colors.totalwhite : colors.yellow2,
                                        margin: '0px',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                    }}
                                />
                            </NavElementLink>
                            <NavElementLink onClick={() => setDisplayHome(true)} to="/projects">
                                <Text
                                    id={'Generic.Projects'}
                                    animation={'fdInLft'}
                                    style={{
                                        color: sticky ? colors.totalwhite : colors.yellow2,
                                        margin: '0px',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                    }}
                                />
                            </NavElementLink>
                            <NavElementLink onClick={() => setDisplayHome(true)} to="/resume">
                                <Text
                                    id={'Generic.Resume'}
                                    animation={'fdInLft'}
                                    style={{
                                        color: sticky ? colors.totalwhite : colors.yellow2,
                                        margin: '0px',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                    }}
                                />
                            </NavElementLink>
                        </NavBar>
                    )}
                    <div style={LangContainer}>
                        {supportedLanguages.map((langOpt, index) => (
                            <img
                                src={matchCountry(langOpt)}
                                width={'20px'}
                                style={{
                                    margin: '6px',
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    border:
                                        langOpt === lang
                                            ? `2px solid ${sticky ? colors.totalwhite : colors.greyblack}`
                                            : 'none',
                                }}
                                onClick={() => store.dispatch(setLang(langOpt))}
                            />
                        ))}
                    </div>
                </NavContainer>
            </div>

            {!sticky && <Line />}
        </>
    );
};

// export default HomePageContainer;
function mapStateToProps(state: { lang: string }) {
    const lang = state.lang;
    return { lang };
}

export default connect(mapStateToProps)(MenuBar);

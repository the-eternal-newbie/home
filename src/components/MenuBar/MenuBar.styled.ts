import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../utils/styles/_colors';
import { getAnimation } from '../../utils/styles/_animations';

export const MenuBarContainer: React.CSSProperties = {
    maxHeight: '160px',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: colors.totalwhite,
};

export const MenuBarCollapsed: React.CSSProperties = {
    top: 0,
    zIndex: 1000,
    width: '100%',
    height: '52px',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    backgroundColor: colors.greyblack,
    transition: 'all 0.3s linear',
};

export const LangContainer: React.CSSProperties = {
    display: 'flex',
    width: '8%',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    border: `1px solid ${colors.grey3}`,
    marginRight: '4px',
};

export const LangContainerCollapsed: React.CSSProperties = {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginRight: '12px',
};

export const Line = styled.div`
    display: block;
    border-bottom: 1px solid ${colors.grey2};
    width: 100%;
    animation-name: ${getAnimation('gwLft')};
    animation-duration: 1s;
`;

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 30px;
`;

export const NavElement = styled.button`
    font-size: 14px;
    color: ${colors.grey3};
    border: none;
    background: transparent;
    cursor: pointer;
    &:hover {
        opacity: 0.4;
    }
`;

export const NavElementLink = styled(NavLink)`
    width: auto;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    border: none;
    background: transparent;
    cursor: pointer;
    &:hover {
        transition: 0.3s;
        opacity: 0.4;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

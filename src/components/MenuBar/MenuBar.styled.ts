import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../../utils/styles/_colors';

export const MenuBarContainer = styled.header`
    background-color: ${colors.white1};
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 30px;
`;

export const NavElement = styled.button`
    font-size: 14px;
    color: ${colors.greyblack};
    border: none;
    background: transparent;
    cursor: pointer;
    &:hover {
        opacity: 0.4;
    }
`;

export const NavElementLink = styled(NavLink)`
    font-size: 14px;
    color: ${colors.greyblack};
    text-decoration: none;
    border: none;
    background: transparent;
    width: auto;
    padding-left: 30px;
    padding-right: 30px;
    cursor: pointer;
    &:hover {
        opacity: 0.4;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    min-width: 470px;
    max-width: 800px;
    min-height: 100px;
`;

import styled from 'styled-components';
import { colors } from '../../utils/styles/_colors';

export const SideBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    height: 100%;
    width: 250px;
    background-color: ${colors.white2};
`;

export const Hamburger = styled.div`
    width: 25px;
    height: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid ${colors.grey2};
    border-radius: 4px;
    cursor: pointer;
`;

export const HamburgerBar = styled.span`
    width: 20px;
    height: 3px;
    background-color: ${colors.grey1};
`;

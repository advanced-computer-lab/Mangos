import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'




export const Nav = styled.nav`
    background-color: #2c3e50;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1920px)/2);
    z-index:10;
`;
export const NavLink = styled(Link)`
    color: #61dafb;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #15cdfc
    }
`;
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);

    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256cel;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transtion: all 0.2 ease-in-out;
    text-decoration : none;

    &:hover{
        transtion: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;

    }

`;
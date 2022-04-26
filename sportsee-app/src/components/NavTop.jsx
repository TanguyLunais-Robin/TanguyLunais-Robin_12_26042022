//React
import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"

//Assets
import logo from "../assets/Logo.svg"

//Utils
import colors from '../styles/colors'

const NavT = styled.nav`
    position: absolute;
    top: 0;
    background-color:  ${colors.backgroundNav};
    width: 100%;
    height: 9.1rem;
    z-index: 2;
    padding: 0 2.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLink = styled(Link)`
    color:  ${colors.white};
    font-size: 2.4rem;
`

class NavTop extends React.Component {
    render() {  
        return (
            <NavT>
                <Link to = "/"><img src = {logo} alt = "Logo de SportSee"/></Link>
                <NavLink to = "/">Accueil</NavLink>
                <NavLink to = "/">Profil</NavLink>
                <NavLink to = "/">Réglage</NavLink>
                <NavLink to = "/">Communauté</NavLink>
            </NavT>
        )
    }
}

export default NavTop
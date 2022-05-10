//React
import React from "react"
import styled from "styled-components"

//Utils
import colors from "../styles/colors"

const Body = styled.div`
    padding-top: 15.9rem;
    margin-left: 22.4rem;

    h1 {
        color: ${colors.fontRed};
    }

    h1, h2 {
        font-size: 4.8rem;
        font-weight: 500;
    }

    @media screen and (max-width: 1390px) {
        padding-top: 11.9rem;
        margin-left: 15.4rem;
    }
`
/**
* @returns {Component} - Div with the 404 page
*/

class Error extends React.Component {
    render() {
        return (
            <Body>
                <h1>404</h1>
                <h2>Oups ! La page que vous demandez n'existe pas</h2>
            </Body>
        )
    }
}

export default Error
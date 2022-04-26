//React
import React from "react";
import styled from "styled-components"

//Utils
import colors from '../styles/colors'

const Title = styled.header`
    h1 {
        font-size: 4.8rem;
        font-weight: 500;
    }
    p {
        font-size: 1.8rem;
        margin-top: 4.1rem;
    }
`

const Name = styled.span`
    font-size: 4.8rem;
    color: ${colors.fontRed};
`

class Header extends React.Component {
    render() { 
        
        const {name} = this.props
        
        return (
            <Title>
                <h1>Bonjour <Name>{name}</Name></h1>
                <p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>
            </Title>
        )
    }
}

export default Header
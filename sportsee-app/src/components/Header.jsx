//React
import React from "react"
import styled from "styled-components"

//Utils
import colors from "../styles/colors"

//Datas
import Service from "../datas/ServiceAPI"
//Possibility to change service (mocked data)
//import Service from "../datas/ServiceMock"

const Title = styled.header`
    h1 {
        font-size: 4.8rem;
        font-weight: 500;
    }

    p {
        font-size: 1.8rem;
        margin-top: 4.1rem;
        margin-bottom: 10.1rem;
    }
`

const Name = styled.span`
    font-size: 4.8rem;
    color: ${colors.fontRed};
`

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Header with name of the user and tagline 
*/

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name: null
        }
        this.service = new Service()
    }
    
    componentDidMount() {
        this.service.getUser(this.props.id, this.recoveryUser)
    }

    /**
    * Update the state with the fetched data
    * @param {object} data the fetched data from API
    */
      
    recoveryUser = (data) => {
        this.setState({
            name: data.name
        })
    }

    render() {
        return (
            <Title>
                <h1>Bonjour <Name>{this.state.name}</Name></h1>
                <p>Félicitation ! Vous avez explosé vos objectif hier 👏</p>
            </Title>
        )
    }
}

export default Header
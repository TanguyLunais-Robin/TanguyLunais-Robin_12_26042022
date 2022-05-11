//React
import React from "react"
import styled from "styled-components"

//Components
import BiaxialBarComponent from "./BiaxialBarComponent"
import RadarComponent from "./RadarComponent"
import LineComponent from "./LineComponent"
import PieComponent from "./PieComponent"
import KeyData from "./KeyData"

const Body = styled.div`
    display: flex;
    column-gap: 3.1rem;

    @media screen and (max-width: 1300px) {
        flex-direction: column;
    }
`

const ContainerBottom = styled.div`
    display: flex;
    column-gap: 3rem;
    margin: 3rem 0;
`

const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1390px) {
        width: 83.5rem;
    }
`

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Div with graphs and key data
*/

class Dashboard extends React.Component {
    render() { 
        const {id} = this.props

        return ( 
            <Body>
                <ContainerLeft>
                    <BiaxialBarComponent id = {id} />
                    <ContainerBottom>
                        <LineComponent id = {id} />
                        <RadarComponent id = {id} />
                        <PieComponent id = {id} />
                    </ContainerBottom>
                </ContainerLeft>
                <KeyData id = {id} />
            </Body>
        )
    }
}

export default Dashboard
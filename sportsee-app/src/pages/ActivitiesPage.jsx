//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import RadarComponent from "../components/RadarComponent"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;
`

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Div with header and radar chart
*/

class ActivitiesPage extends React.Component {
    render () {
        const {id} = this.props.match.params

        return (
            <Body>
                <Header id = {id} />
                <RadarComponent id = {id} />
            </Body>
        )
    }
}

export default ActivitiesPage
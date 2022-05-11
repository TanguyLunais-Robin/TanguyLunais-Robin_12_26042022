//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import PieComponent from "../components/PieComponent"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;
`

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Div with header and pie chart
*/

class TodayScorePage extends React.Component {
    render () {
        const {id} = this.props.match.params

        return (
            <Body>
                <Header id = {id} />
                <PieComponent id = {id} />
            </Body>
        )
    }
}

export default TodayScorePage
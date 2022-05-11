//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import BiaxialBarComponent from "../components/BiaxialBarComponent"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;

  @media screen and (max-width: 1100px) {
    padding-top: 11.9rem;
    margin-left: 15.4rem;
  }
`

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Div with header and biaxial bar chart
*/

class ActivityPage extends React.Component {
  render () {
    const {id} = this.props.match.params

    return (
      <Body>
        <Header id = {id} />
        <BiaxialBarComponent id = {id} />
      </Body>
    )
  }
}

export default ActivityPage
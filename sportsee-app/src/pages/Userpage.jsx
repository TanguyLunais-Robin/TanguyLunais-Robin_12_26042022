//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import Dashboard from "../components/Dashboard"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;

  @media screen and (max-width: 1390px) {
    padding-top: 11.9rem;
    margin-left: 15.4rem;
  }
`

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Div with header and dashboard
*/

class UserPage extends React.Component {
  render () {
    const {id} = this.props.match.params

    return (
      <React.Fragment>
          <Body>
            <Header id = {id} />
            <Dashboard id = {id} />
          </Body>
      </React.Fragment>
    )
  }
}

export default UserPage
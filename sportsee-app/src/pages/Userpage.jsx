//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import Dashboard from "../components/Dashboard"

//Datas
import fetchData from "../datas/Calls"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;

  @media screen and (max-width: 1390px) {
    padding-top: 11.9rem;
    margin-left: 15.4rem;
  }
`

/** 
*@returns {Component} - Div with header and dashboard
*/

class UserPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: null,
      average: null,
      dataRecovered: false,
      name: null,
      performance: null,
      user: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    fetchData(id).then((data) => {
      this.setState({
        name: data.userInfos.firstName,
        user: data
      })
    })

    fetchData(`${id}/activity`).then((data) => {
        this.setState({
          activity: data
        })
    })

    fetchData(`${id}/average-sessions`).then((data) => {
      this.setState({
        average: data.sessions
      })
    })

    fetchData(`${id}/performance`).then((data) => {
      this.setState({
        dataRecovered: true,
        performance: data
      })
    })
  }

  render () {
    return (
      <React.Fragment>
        {this.state.dataRecovered ?
          <Body>
            <Header
              name = {this.state.name}
            />
            <Dashboard
              activity = {this.state.activity}
              average = {this.state.average}
              performance = {this.state.performance}
              user = {this.state.user}
            />
          </Body>
        : null }
      </React.Fragment>
    )
  }
}

export default UserPage
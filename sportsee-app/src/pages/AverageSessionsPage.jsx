//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import LineComponent from "../components/LineComponent"

//Datas
import fetchData from "../datas/Calls"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;
`

/** 
*@returns {Component} - Div with header and line chart
*/

class AverageSessionsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      average: null,
      name: null,
      dataRecovered: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    fetchData(id).then((data) => {
      this.setState({
        name: data.userInfos.firstName
      })
    })

    fetchData(`${id}/average-sessions`).then((data) => {
      this.setState({
        average: data.sessions,
        dataRecovered: true
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
            <LineComponent
              average = {this.state.average}
            />
          </Body>
        : null }
      </React.Fragment>
    )
  }
}

export default AverageSessionsPage
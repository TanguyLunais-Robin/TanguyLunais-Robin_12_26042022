//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import BiaxialBarComponent from "../components/BiaxialBarComponent"

//Datas
import fetchData from "../datas/Calls"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;

  @media screen and (max-width: 1100px) {
    padding-top: 11.9rem;
    margin-left: 15.4rem;
  }
`

/** 
*@returns {Component} - Div with header and biaxial bar chart
*/

class ActivityPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activity: null,
      dataRecovered: false,
      name: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    fetchData(id).then((data) => {
      this.setState({
        name: data.userInfos.firstName
      })
    })

    fetchData(`${id}/activity`).then((data) => {
        this.setState({
          activity: data,
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
            <BiaxialBarComponent
                activity = {this.state.activity}
            />
          </Body>
        : null }
      </React.Fragment>
    )
  }
}

export default ActivityPage
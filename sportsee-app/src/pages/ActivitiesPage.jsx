//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import RadarComponent from "../components/RadarComponent"

//Datas
import fetchData from "../datas/Calls"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;
`

/** 
*@returns {Component} - Div with header and radar chart
*/

class ActivitiesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataRecovered: false,
            name: null,
            performance: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        fetchData(id).then((data) => {
            this.setState({
                name: data.userInfos.firstName
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
                        <RadarComponent
                            performance = {this.state.performance}
                        />
                    </Body>
                : null }
            </React.Fragment>
        )
    }
}

export default ActivitiesPage
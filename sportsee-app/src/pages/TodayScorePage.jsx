//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import PieComponent from "../components/PieComponent"

//Datas
import fetchData from "../datas/Calls"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;
`

/** 
*@returns {Component} - Div with header and pie chart
*/

class TodayScorePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            user: null,
            dataRecovered: false,
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        fetchData(id).then((data) => {
            this.setState({
                name: data.userInfos.firstName,
                user: data,
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
                        <PieComponent
                            user = {this.state.user}
                        />
                    </Body>
                : null }
            </React.Fragment>
        )
    }
}

export default TodayScorePage
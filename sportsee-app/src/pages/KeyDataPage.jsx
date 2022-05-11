//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import KeyData from "../components/KeyData"

//Datas
import fetchData from "../datas/Calls"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;
`

/** 
*@returns {Component} - Div with header and key data
*/

class KeyDataPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataRecovered: false,
            name: null,
            user: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        fetchData(id).then((data) => {
            this.setState({
                dataRecovered: true,
                name: data.userInfos.firstName,
                user: data
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
                        <KeyData
                            user = {this.state.user}
                        />
                    </Body>
                : null }
            </React.Fragment>
        )
    }
}

export default KeyDataPage
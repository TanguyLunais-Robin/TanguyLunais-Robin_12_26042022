//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import KeyData from "../components/KeyData"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;
`

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Div with header and key data
*/

class KeyDataPage extends React.Component {
    render () {
        const {id} = this.props.match.params

        return (
            <Body>
                <Header id = {id} />
                <KeyData id = {id} />
            </Body>
        )
    }
}

export default KeyDataPage
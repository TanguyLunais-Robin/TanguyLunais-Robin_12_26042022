//React
import React from "react";
import styled from "styled-components"

//Components
import Header from "../components/Header"
import Dashboard from "../components/Dashboard"

//Datas
import { USER_MAIN_DATA, USER_ACTIVITY } from "../datas/data";

const Body = styled.div`
  margin-top: 15.9rem;
  margin-left: 22.4rem;
`

class UserPage extends React.Component {
  render () {
    return (
      <Body>
        <Header
          name = {USER_MAIN_DATA[0].userInfos.firstName}
        />
        <Dashboard
          session = {USER_ACTIVITY[0].sessions}
        />
      </Body>
    );
  }
}

export default UserPage;
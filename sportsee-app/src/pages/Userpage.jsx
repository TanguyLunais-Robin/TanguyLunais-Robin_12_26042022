//React
import React from "react"
import styled from "styled-components"

//Components
import Header from "../components/Header"
import Dashboard from "../components/Dashboard"

//Datas
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "../datas/data"

const Body = styled.div`
  padding-top: 15.9rem;
  margin-left: 22.4rem;

  @media screen and (max-width: 1390px) {
    padding-top: 11.9rem;
    margin-left: 15.4rem;
  }
}
`

class UserPage extends React.Component {
  render () {
    return (
      <Body>
        <Header
          name = {USER_MAIN_DATA[0].userInfos.firstName}
        />
        <Dashboard
          activity = {USER_ACTIVITY[0]}
          average = {USER_AVERAGE_SESSIONS[0].sessions}
          performance = {USER_PERFORMANCE[0]}
          user = {USER_MAIN_DATA[0]}
        />
      </Body>
    );
  }
}

export default UserPage;
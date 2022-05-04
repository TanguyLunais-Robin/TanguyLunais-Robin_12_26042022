//React
import React from "react";
import styled from "styled-components";

//Components
import BiaxialBarComponent from "./BiaxialBarComponent";
import RadarComponent from "./RadarComponent";
import SimpleAreaComponent from "./SimpleAreaComponent";

const ContainerBottom = styled.div`
  display: flex;
  column-gap: 3rem;
  margin: 3rem 0;
`

class Dashboard extends React.Component {
    render() { 

        const {session, average, kind, data} = this.props

        return (
            <React.Fragment>
                <BiaxialBarComponent
                    session = {session}
                />
                <ContainerBottom>
                    <SimpleAreaComponent
                        average = {average}
                    />
                    <RadarComponent
                        kind = {kind}
                        data = {data}
                    />
                </ContainerBottom>
            </React.Fragment>
        )
    }
}

export default Dashboard
//React
import React from "react"
import {Radar, RadarChart, PolarGrid, PolarAngleAxis} from "recharts"
import styled from "styled-components"

//Utils
import colors from '../styles/colors'

const ContainerRadar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkGrey};
  border-radius: .5rem;
  height: 26.3rem;
  width: 25.8rem;
  tspan {
    font-size: 1.2rem;
  }
`

class RadarComponent extends React.Component {
  render() {

    const {data} = this.props.performance

    return (
      <ContainerRadar>
        <RadarChart
          outerRadius = {90}
          width = {250}
          height = {250}
          data = {data}
        >
          <PolarGrid/>
          <PolarAngleAxis
            dataKey = "kind"
          />
          <Radar
            dataKey = "value"
            fill = {colors.backgroundGraphRed}
          />
        </RadarChart>
      </ContainerRadar>
    );
  }
}

export default RadarComponent
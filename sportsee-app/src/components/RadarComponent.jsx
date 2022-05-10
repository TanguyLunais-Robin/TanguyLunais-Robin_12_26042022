//React
import React from "react"
import {Radar, RadarChart, PolarGrid, PolarAngleAxis} from "recharts"
import styled from "styled-components"

//Utils
import colors from "../styles/colors"

const ContainerRadar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkGrey};
  border-radius: .5rem;
  height: 26.3rem;
  width: 25.8rem;

  tspan {
    font-size: 1rem;
  }
`

/**
* @param {Object} props - Props
* @param {Array} props - Data to display in the graph (performance)
* @param {Object} props[].kind - Corresponds to formatted X axis data (word matches kind digit)
* @param {Array} props[].data - Data to display in the graph (value, kind)
* @param {Number} props[].data[].value - Value of the performance of the day
* @param {Number} props[].data[].kind - Corresponds to unformatted X axis data (kind digit)
* @returns {Component} - Div with the Radar Chart
*/

class RadarComponent extends React.Component {
  render() {

    const {performance} = this.props

    return (
      <ContainerRadar>
        <RadarChart
          outerRadius = {83}
          width = {258}
          height = {258}
          data = {performance.data}
          margin = {{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <PolarGrid/>
          <PolarAngleAxis
            tickLine = {false}
            stroke = {colors.white}
            dataKey = "kind"
            axisLine = {false}
            tickFormatter = {(value, index) => performance.kind[value][0].toUpperCase() + performance.kind[value].slice(1)}
          />
          <Radar
            dataKey = "value"
            fill = {colors.backgroundGraphRed}
          />
        </RadarChart>
      </ContainerRadar>
    )
  }
}

export default RadarComponent
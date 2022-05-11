//React
import React from "react"
import {Radar, RadarChart, PolarGrid, PolarAngleAxis} from "recharts"
import styled from "styled-components"

//Utils
import colors from "../styles/colors"

//Datas
import Service from "../datas/ServiceAPI"
//Possibility to change service (mocked data)
//import Service from "../datas/ServiceMock"

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
* @param {string} id - User ID number
* @returns {Component} - Div with the Radar Chart
*/

class RadarComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [
        {value: 0, kind: 1},
        {value: 0, kind: 2},
        {value: 0, kind: 3},
        {value: 0, kind: 4},
        {value: 0, kind: 5},
        {value: 0, kind: 6}
      ],
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity"
      }
    }
    this.service = new Service()
  }

  componentDidMount() {
    this.service.getPerformance(this.props.id, this.recoveryPerformance)
  }

  /**
  * Update the state with the fetched data
  * @param {object} data the fetched data from API
  */

  recoveryPerformance = (data) => {
    this.setState({
      datas: data.datas,
      kind: data.kind
    })
  }

  render() {
    return (
      <ContainerRadar>
        <RadarChart
          outerRadius = {83}
          width = {258}
          height = {258}
          data = {this.state.datas}
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
            tickFormatter = {(value, index) => this.state.kind[value][0].toUpperCase() + this.state.kind[value].slice(1)}
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
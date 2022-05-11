//React
import React from "react"
import {PieChart, Pie, Cell} from "recharts"
import styled from "styled-components"

//Utils
import colors from "../styles/colors"

//Datas
import Service from "../datas/ServiceAPI"
//Possibility to change service (mocked data)
//import Service from "../datas/ServiceMock"

const ContainerPie = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backgroundLightGrey};
  border-radius: .5rem;
  height: 26.3rem;
  width: 25.8rem;

  h2 {
    position: absolute;
    left: 3rem;
    top: 2.4rem;
    font-size: 1.5rem;
    color: ${colors.graphTitle}
  }
`

const PieInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  row-gap: .5rem;

  p {
    font-size: 1.6rem;
    color: ${colors.fontLightGrey}
  }

  span {
    font-size: 2.6rem;
    color: ${colors.darkGrey}
  }
`

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Div with the Pie Chart
*/

class PieComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todayScore: NaN
    }
    this.service = new Service()
  }

  componentDidMount() {
    this.service.getUser(this.props.id, this.recoveryUser)
  }
  
  /**
  * Update the state with the fetched data
  * @param {object} data the fetched data from API
  */

  recoveryUser = (data) => {
    this.setState({
      todayScore: data.todayScore
    })
  }

  render () {
    const score = [{ value: this.state.todayScore }, { value: 1 - this.state.todayScore }]
    const graphColors = [colors.graphRed, "transparent"]

    return (
      <ContainerPie>
        <h2>Score</h2>
        <PieChart width={258} height={263}>
          <Pie
            data = {score}
            innerRadius = {70}
            outerRadius = {80}
            fill = "#8884d8"
            paddingAngle = {5}
            startAngle = {90}
            dataKey = "value"
          >
            {score.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                stroke = "transparent"
                fill={graphColors[index % graphColors.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <PieInfo>
          <span>{`${this.state.todayScore * 100}%`}</span>
          <p>de votre</p>
          <p>objectif</p>
        </PieInfo>
      </ContainerPie>
    );
  }
}

export default PieComponent
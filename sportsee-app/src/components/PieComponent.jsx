//React
import React from "react";
import {PieChart, Pie, Cell} from "recharts";
import styled from "styled-components"

//Utils
import colors from "../styles/colors"

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

class PieComponent extends React.Component {
  render () {

    const {user} = this.props

    const score = [{ value: user.todayScore }, { value: 1 - user.todayScore }];
    const graphColors = [colors.graphRed, "transparent"];

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
              <Cell key={`cell-${index}`} stroke = "transparent" fill={graphColors[index % graphColors.length]}/>
            ))}
          </Pie>
        </PieChart>
        <PieInfo>
          <span>{`${user.todayScore * 100}%`}</span>
          <p>de votre</p>
          <p>objectif</p>
        </PieInfo>
      </ContainerPie>
    );
  }
}

export default PieComponent
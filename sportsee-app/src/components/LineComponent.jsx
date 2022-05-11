//React
import React from "react"
import {Line, LineChart, Tooltip, XAxis, YAxis} from "recharts"
import styled from "styled-components"

//Utils
import colors from "../styles/colors"

//Datas
import Service from "../datas/ServiceAPI"
//Possibility to change service (mocked data)
//import Service from "../datas/ServiceMock"

const ContainerLine = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${colors.iconRed};
  border-radius: .5rem;
  height: 26.3rem;
  width: 25.8rem;

  h2 {
    position: absolute;
    left: 3rem;
    top: 2.4rem;
    font-size: 1.5rem;
    color: ${colors.white};
    opacity: 0.5;
    width: 70%;
  }

  tspan {
    font-size: 1.2rem;
    opacity: 0.5;
  }
`

const ContainerTooltip = styled.div`
    background-color: ${colors.white};
    color: ${colors.black};
    display: flex;

    p {
        margin: .8rem .8rem;
    }
`

/**
* Custom tooltip of BarChart
* @param {array} payload - Containing the information of Barchart
* @param {boolean} active - Tooltip status
* @returns {Component} - Div with the information to display (sessionLenght)
*/

const CustomTooltip = ({active, payload}) => {
	if (active) {
		return (
      <ContainerTooltip>
        <p>{`${payload[0].value} min`}</p>
      </ContainerTooltip>
		);
	}

	return null
}

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Div with the Line Chart
*/

class LineComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      average: [
        {day: 0, sessionLength: NaN},
      ]
    }
    this.service = new Service()
  }

  componentDidMount() {
    this.service.getAverageSessions(this.props.id, this.recoveryAverageSessions)
  }
  
  /**
  * Update the state with the fetched data
  * @param {object} data the fetched data from API
  */

  recoveryAverageSessions = (data) => {
    this.setState({
      average: data.average
    })
  }

  /**
  * @param {Object} props - Corresponds to unformatted X axis data (number)
  * @returns {string} - Data formatted in the correct format: letter corresponding to the day number
  */

  getXAxis(data) {
    let value = ""
    switch (data.day) {
      case 1:
        value = "L"
        break;
      case 2:
        value = "M"
        break;
      case 3:
        value = "M"
        break;
      case 4:
        value = "J"
        break;
      case 5:
        value = "V"
        break;
      case 6:
        value = "S"
        break;
      case 7:
        value = "D"
        break;
      default:
        value = ""
    }
    return value
  }

  render() {
    return (
      <ContainerLine>
        <h2>Durée moyenne des sessions</h2>
        <LineChart
          width = {258}
          height = {263}
          data = {this.state.average}
          margin = {{
            top: 0,
            right: 14,
            left: 14,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey = {this.getXAxis}
            stroke = {colors.white}
            axisLine = {false}
            tickLine = {false}
          />
          <YAxis
            dataKey = "sessionLength"
            hide = {true}
            domain = {["dataMin -10", "dataMax +30"]}
          />
          <Tooltip content = {<CustomTooltip/>}/>
          <Line
            type = "monotone"
            dataKey = "sessionLength"
            stroke = {colors.white}
            strokeWidth = {2}
            dot = {false}
            activeDot = {{
              stroke: colors.backgroundWhite,
              strokeWidth: 9,
              r: 4,
            }}
          />
        </LineChart>
      </ContainerLine>
    )
  }
}

export default LineComponent
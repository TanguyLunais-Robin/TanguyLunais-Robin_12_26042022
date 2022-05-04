//React
import React from "react"
import {AreaChart, Area, XAxis, Tooltip} from "recharts"
import styled from "styled-components"

//Utils
import colors from '../styles/colors'

const ContainerArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.iconRed};
  border-radius: .5rem;
  height: 26.3rem;
  width: 25.8rem;
`

const ContainerTooltip = styled.div`
    background-color: ${colors.white};
    color: ${colors.black};
    display: flex;
    p {
        margin: .8rem .8rem;
    }
`

const CustomTooltip = ({active, payload}) => {
	if (active) {
		return (
      <ContainerTooltip>
        <p>{`${payload[0].value} min`}</p>
      </ContainerTooltip>
		);
	}

	return null;
};

class SimpleAreaComponent extends React.Component {
  render() {

    const {average} = this.props

    return (
      <ContainerArea>
        <AreaChart
        width = {258}
        height = {263}
        data = {average}
        margin = {{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="day" axisLine = {false} tickLine = {false}/>
        <Tooltip  content = {<CustomTooltip/>}/>
        <Area
          type = "monotone"
          dataKey="sessionLength"
          stroke = {colors.white}
          strokeWidth = {2}
        />
      </AreaChart>
      </ContainerArea>
    );
  }
}

export default SimpleAreaComponent
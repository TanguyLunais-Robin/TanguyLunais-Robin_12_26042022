import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from "styled-components"

//Utils
import colors from '../styles/colors'

const ContainerTooltip = styled.div`
    background-color: ${colors.graphRed};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        font-sie: .7rem;
        margin: .4rem .6rem;
    }
`

const CustomTooltip = ({ active, payload}) => {
	if (active) {
		return (
			<ContainerTooltip>
				<p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}Kcal`}</p>
			</ContainerTooltip>
		);
	}

	return null;
};

class BiaxialBarChart extends PureComponent {
  render() {

    const { session } = this.props

    return (
        <BarChart
          width = {835}
          height = {320}
          data = {session}
        >
            <CartesianGrid vertical={false} strokeDasharray="4 2" />
            <XAxis 
                dataKey = "day"
                tickLine = {false}
                dy = {16}
            />
            <YAxis
                axisLine={false}
                tickLine={false}
                yAxisId="right"
                orientation="right"
                color={colors.graphGrey}
            />
            <Tooltip content = {<CustomTooltip />} />
            <Legend />
            <Bar
                barSize={7}
                radius={[3, 3, 0, 0]}
                yAxisId="right"
                dataKey="kilogram"
                fill={colors.darkGrey}
            />
            <Bar
                barSize={7}
                radius={[3, 3, 0, 0]}
                yAxisId="right"
                dataKey="calories"
                fill={colors.graphRed}
            />
        </BarChart>
    );
  }
}

export default BiaxialBarChart
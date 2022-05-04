//React
import React from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'
import styled from "styled-components"

//Utils
import colors from '../styles/colors'

const ContainerTooltip = styled.div`
    background-color: ${colors.graphRed};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: .7rem;
    p {
        margin: .8rem .8rem;
    }
`

const ContainerGraph= styled.div`
    background-color: ${colors.backgroundLightGrey};
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    heigth: 32rem;
    max-width: 83.5rem;
    padding-bottom: 2.3rem;
    tspan {
        font-size: 1.4rem
    }
`

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: 2.4rem;
    margin-bottom: 6.45rem;
    h2 {
        font-size: 1.5rem;
        font-weight: 500;
        color: ${colors.graphTitle};
    }
`

const Legend = styled.div`
    display: flex;
    column-gap: 3.2rem;
`

const Unity = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-left: 1rem;
        font-size: 1.4rem;
        color: ${colors.fontLightGrey};
    }
`

const Color = styled.div`
    background-color: ${(props) => props.color};
    height: .8rem;
    width: .8rem;
    border-radius: 10rem;
`

const CustomTooltip = ({active, payload}) => {
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

class BiaxialBarComponent extends React.Component {
  render() {

    const {session} = this.props

    return (
        <ContainerGraph>
            <Title>
                <h2>Activité quotidienne</h2>
                <Legend>
                    <Unity>
                        <Color color = {colors.darkGrey}></Color>
                        <p>Poids (kg)</p>
                    </Unity>
                    <Unity>
                        <Color color = {colors.graphRed}></Color>
                        <p>Poids Calories brûlées (kCal)</p>
                    </Unity>
                </Legend>
            </Title>
            <BarChart
                width = {785}
                height = {206}
                data = {session}
            >
                <CartesianGrid vertical = {false} strokeDasharray = "4 2"/>
                <XAxis 
                    dataKey = "day"
                    tickLine = {false}
                    dy = {16}
                    axisLine = {{stroke: colors.graphLine}}
                />
                <YAxis
                    axisLine = {false}
                    tickLine = {false}
                    dx = {28 }
                    yAxisId = "right"
                    orientation = "right"
                    color = {colors.graphGrey}
                    tick = {{fontSize: 14}}
                />
                <Tooltip cursor = {{fill: colors.backgroundGraphGrey}} content = {<CustomTooltip />}/>
                <Bar
                    barSize = {7}
                    radius = {[3, 3, 0, 0]}
                    yAxisId = "right"
                    dataKey = "kilogram"
                    fill = {colors.darkGrey}
                />
                <Bar
                    barSize = {7}
                    radius = {[3, 3, 0, 0]}
                    yAxisId = "right"
                    dataKey = "calories"
                    fill = {colors.graphRed}
                />
            </BarChart>
        </ContainerGraph>
    );
  }
}

export default BiaxialBarComponent
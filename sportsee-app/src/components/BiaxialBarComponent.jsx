//React
import React from "react"
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts"
import styled from "styled-components"

//Utilss
import colors from "../styles/colors"

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

const ContainerBar = styled.div`
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

/**
* Custom tooltip of BarChart
* @param {array} payload - Containing the information of Barchart
* @param {boolean} active - Tooltip status
* @returns {Component} - Div with the information to display (kilogram, calories)
*/

const CustomTooltip = ({active, payload}) => {
	if (active) {
		return (
			<ContainerTooltip>
				<p>{`${payload[0].value}kg`}</p>
                <p>{`${payload[1].value}kCal`}</p>
			</ContainerTooltip>
		);
	}

	return null
};

/**
* Custom X axis of BarChart
* @param {string} tickItem - Unformatted X axis data (YYYY-MM-DD)
* @returns {string} - Data formatted in the correct format (DD)
*/

const formatXAxis = (tickItem) => {
    tickItem = tickItem.slice(8)

    if (tickItem[0] === "0") {
        tickItem = tickItem.slice(1)
    }

    return tickItem
  }

/**
* @param {Object} props - Props
* @param {Array} props.activity - Data to display in the graph (sessions)
* @param {string} props.activity[].day - Date of the data
* @param {number} props.activity[].kilogram - Kilogram for the date
* @param {number} props.activity[].calories - Calories spent for the day
* @returns {Component} - Div with the Biaxal Bar Chart
*/

class BiaxialBarComponent extends React.Component {
  render() {

    const {sessions} = this.props.activity

    return (
        <ContainerBar>
            <Title>
                <h2>Activité quotidienne</h2>
                <Legend>
                    <Unity>
                        <Color color = {colors.darkGrey}/>
                        <p>Poids (kg)</p>
                    </Unity>
                    <Unity>
                        <Color color = {colors.graphRed}/>
                        <p>Poids Calories brûlées (kCal)</p>
                    </Unity>
                </Legend>
            </Title>
            <BarChart
                width = {785}
                height = {206}
                data = {sessions}
            >
                <CartesianGrid
                    vertical = {false}
                    strokeDasharray = "4 2"
                />
                <XAxis 
                    dataKey = "day"
                    tickLine = {false}
                    dy = {16}
                    axisLine = {{stroke: colors.graphLine}}
                    tickFormatter = {formatXAxis}
                />
                <YAxis
                    axisLine = {false}
                    tickLine = {false}
                    dx = {28}
                    yAxisId = "kilogram"
                    orientation = "right"
                    dataKey = "kilogram"
                    color = {colors.graphGrey}
                    domain = {["dataMin -1", "dataMax +1"]}
                    tick = {{fontSize: 14}}
                />
                <YAxis
                    yAxisId = "calories"
                    dataKey = "calories"
                    hide = {true}
                    domain = {[0, "dataMax +10"]}
                />
                <Tooltip
                    cursor = {{fill: colors.backgroundGraphGrey}}
                    content = {<CustomTooltip />}
                />
                <Bar
                    barSize = {7}
                    radius = {[3, 3, 0, 0]}
                    yAxisId = "kilogram"
                    dataKey = "kilogram"
                    fill = {colors.darkGrey}
                />
                <Bar
                    yAxisId = "calories"
                    barSize = {7}
                    radius = {[3, 3, 0, 0]}
                    dataKey = "calories"
                    fill = {colors.graphRed}
                />
            </BarChart>
        </ContainerBar>
    )
  }
}

export default BiaxialBarComponent
//React
import React from "react";

//Components
import BiaxialBarChart from "./BiaxialBarChart";

class Dashboard extends React.Component {
    render() { 

        const { session } = this.props

        return (
            <BiaxialBarChart
            session = {session}
            />
        )
    }
}

export default Dashboard
//React
import React from "react";
import styled from "styled-components"

//Utils
import colors from "../styles/colors"

//Assets
import Apple from "../assets/AppleIcon.svg"
import Cheeseburger from "../assets/CheeseburgerIcon.svg"
import Chicken from "../assets/ChickenIcon.svg"
import Flame from "../assets/FlameIcon.svg"

const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3.9rem;
    span {
        font-weight: 700;
        font-size: 2rem;
        color: ${colors.darkGrey};
    }
    p {
        font-size: 1.4rem;
        color: ${colors.fontLightGrey};
    }
`

const ContainerKeyData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2.4rem;
    background-color: ${colors.backgroundLightGrey};
    width: 25.8rem;
    height: 12.4rem;
    border-radius: .5rem;
`
const BackgroundIcon = styled.div`
    background-color: ${(props) => props.color};
    opacity: 0.07;
    height: 6rem;
    width: 6rem;
    img {
        z-index: 2;
    }
`

class KeyData extends React.Component {
  render () {

    const {user} = this.props

    return (
        <ContainerRight>
            <ContainerKeyData>
                <BackgroundIcon color = {colors.iconRed}>
                    <img src = {Flame} alt = "Icône de flamme"/>
                </BackgroundIcon>
                <div>
                    <span>{`${user.keyData.calorieCount}kCal`}</span>
                    <p>Calories</p>
                </div>
            </ContainerKeyData>

            <ContainerKeyData>
                <img src = {Chicken} alt = "Icône de cuisse de poulet"/>
                <div>
                    <span>{`${user.keyData.proteinCount}g`}</span>
                    <p>Proteines</p>
                </div>
            </ContainerKeyData>

            <ContainerKeyData>
                <img src = {Apple} alt = "Icône de pomme"/>
                <div>
                    <span>{`${user.keyData.carbohydrateCount}g`}</span>
                    <p>Glucides</p>
                </div>
            </ContainerKeyData>

            <ContainerKeyData>
                <img src = {Cheeseburger} alt = "Icône de cheeseburger"/>
                <div>
                    <span>{`${user.keyData.lipidCount}g`}</span>
                    <p>Lipides</p>
                </div>
            </ContainerKeyData>
        </ContainerRight>
    )
  }
}

export default KeyData
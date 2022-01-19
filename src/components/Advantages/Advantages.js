import React from 'react'
import styled from 'styled-components'
import {advantagesData} from '../../Data/advantages-data';

const StyledAdvantages = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-gap: 75px;
  margin-bottom: 45px;
`

const StyledAdvantageItem = styled.div`
  width: 220px;
  padding-left: 45px;
`

const StyledAdvantageTitle = styled.h4`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
 
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    left: -50px;
    top: -50%;
    background-image: url(${(props) => (props.icon)});
  }
`

const StyledAdvantageDescription = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  color: #333333;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 35px;
    height: 35px;
    left: -25px;
    top: -53%;
    background: #a1d214;
    border-radius: 50%;
  }
`

function Advantages() {

  return (
    <StyledAdvantages>
      {advantagesData.map((adv) => (
        <StyledAdvantageItem>
          <StyledAdvantageTitle icon={adv.icon}>{adv.title}</StyledAdvantageTitle>
          <StyledAdvantageDescription>{adv.description}</StyledAdvantageDescription>
        </StyledAdvantageItem>
      ))}
    </StyledAdvantages>
  )
}

export default Advantages

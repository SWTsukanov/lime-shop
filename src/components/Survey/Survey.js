import React from 'react'
import styled from 'styled-components'

const StyledSurvey = styled.div`
  height: 176px;
  background: linear-gradient(90deg, #A1D214 0%, #87C04F 100%);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px 30px 35px 50px;
  display: flex;
  justify-content: space-evenly;
`

const StyledSurveyTitle = styled.h2`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24px;
  color: #333333;
  max-width: 155px;
  margin-right: 50px;
`
const StyledButton = styled.button`
  border: none;
  padding: 20px 20px;
  border-radius: 5px;
  background: #ffffff;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 12px;
  color: #333333;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.5) 60%);
    border-radius: 5px;
    transition: .2s;
  }

  &:hover {
    &:before {
      transform: scaleX(1.1) scaleY(1.2);
    }
  }
`

const StyledQuestion = styled.div`
  h4 {
    font-family: Montserrat;
    font-size: 14px;
    line-height: 17px;
    color: #333333;
    margin-bottom: 25px;
  }

  div {
    display: flex;
    column-gap: 15px;
  }
`

function Survey(props) {
  const {title, question, variantOne, variantTwo, variantThree} = props
  return (
    <StyledSurvey>
      <StyledSurveyTitle>
        {title}
      </StyledSurveyTitle>
      <StyledQuestion>
        <h4>{question}</h4>
        <div>
          <StyledButton>{variantOne}</StyledButton>
          <StyledButton>{variantTwo}</StyledButton>
          <StyledButton>{variantThree}</StyledButton>
        </div>
      </StyledQuestion>
    </StyledSurvey>
  )
}

export default Survey

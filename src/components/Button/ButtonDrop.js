import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 45px;
  background-color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #333333;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`

const StyledIcon = styled.div`
  width: 45px;
  height: 45px;
  background-color: #ffc709;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #333333;
  cursor: pointer;
`

const DropIcon = styled.div`
  width: 18px;
  height: 15px;
  background: url('./icons/drop-arrow.svg') center no-repeat;
  cursor: pointer;
`

function ButtonDrop(props) {
  const { text, icon } = props
  return (
    <StyledButton>
      <StyledIcon>
        {icon}
      </StyledIcon>
      {text}
      <DropIcon />
    </StyledButton>
  )
}

export default ButtonDrop

import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 45px;
  background-color: #a1d214;
  border: none;
  border-radius: 10px;
  display: flex;
  padding: 0 15px;
  align-items: center;
  column-gap: 15px;
  color: #333333;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
const StyledIcon = styled.div`
  width: 20px;
  height: 20px;
  background: url(${(props) => (props.url)}) center no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #333333;
  cursor: pointer;
`

function Button(props) {
  const { text, icon } = props
  return (
    <StyledButton>
      <StyledIcon url={icon} />
      {text}
    </StyledButton>
  )
}

export default Button

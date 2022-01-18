import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 100%;
  background-color: #ffffff;
  border-bottom: solid 3px #ffffff;
  border-top: solid 3px #ffffff;
  border-left: none;
  border-right: none;
  display: flex;
  padding: 0 15px;
  align-items: center;
  column-gap: 10px;
  color: #333333;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    border-bottom: solid 3px #a1d214;
  }
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

function ButtonTab(props) {
  const { text, icon } = props
  return (
    <StyledButton>
      <StyledIcon url={icon} />
      {text}
    </StyledButton>
  )
}

export default ButtonTab

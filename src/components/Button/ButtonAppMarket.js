import React from 'react'
import styled from 'styled-components'

const StyledButtonAppMarket = styled.button`
  height: 45px;
  width: 245px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  column-gap: 20px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
`
const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url(${(props) => (props.url)}) center no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #333333;
  cursor: pointer;
`

function ButtonAppMarket(props) {
  const { text, icon } = props
  return (
    <StyledButtonAppMarket>
      <StyledIcon url={icon} />
      {text}
    </StyledButtonAppMarket>
  )
}

export default ButtonAppMarket

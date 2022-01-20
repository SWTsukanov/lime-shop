import React from 'react'
import styled from 'styled-components'

const StyledButtonProduct = styled.button`
  width: 100%;
  height: 34px;
  background-color: rgba(161, 210, 20, 0);
  border: solid 1px #a1d214;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  color: #333333;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background-color: #a1d214;
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

function ButtonProduct(props) {
  const { text, icon } = props
  return (
    <StyledButtonProduct>
      <StyledIcon url={icon} />
      {text}
    </StyledButtonProduct>
  )
}

export default ButtonProduct

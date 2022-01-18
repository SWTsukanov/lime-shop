import React from 'react'
import styled from 'styled-components'

const StyledButtonAppStore = styled.button`
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
  font-family: Montserrat;
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

function ButtonAppStore(props) {
  const { text, icon } = props
  return (
    <StyledButtonAppStore>
      <StyledIcon url={icon} />
      {text}
    </StyledButtonAppStore>
  )
}

export default ButtonAppStore

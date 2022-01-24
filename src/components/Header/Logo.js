import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
  position: absolute;
  width: 195px;
  height: 195px;
  left: -35px;
  top: -75px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  
`

const StyledLogoIcon = styled.div`
  width: 100%;
  height: 100%;
  background: url("/icons/logo.svg") 70% 70% no-repeat;
`

function Logo() {
  return (
    <StyledLogo>
      <StyledLogoIcon />
    </StyledLogo>
  )
}

export default Logo
import React from 'react'
import styled from 'styled-components'
import TopNav from './TopNav'
import SubNav from './SubNav'
import Logo from './Logo';

const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
`

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <TopNav />
      <SubNav />
    </StyledHeader>
  )
}

export default Header

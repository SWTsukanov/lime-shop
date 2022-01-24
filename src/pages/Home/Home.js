import React from 'react'
import styled from 'styled-components'
import SideShoppingCart from '../../components/ShoppingCart/SideShoppingCart';
import HomeSection from './HomeSection';

const StyledHome = styled.main`
  display: flex;
  justify-content: center;
`

function Home() {
  return (
    <StyledHome>
      <HomeSection />
      <SideShoppingCart />
    </StyledHome>
  )
}

export default Home

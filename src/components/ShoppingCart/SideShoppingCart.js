import React from 'react'
import styled from 'styled-components'

const StyledSideShoppingCart = styled.div`
  width: 200px;
  height: 400px;
  background: #f1f1f1;
`

function SideShoppingCart(props) {
  return (
    <StyledSideShoppingCart>
      Корзина
    </StyledSideShoppingCart>
  )
}

export default SideShoppingCart

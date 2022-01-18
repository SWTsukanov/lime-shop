import React from 'react'
import styled from 'styled-components'

const StyledSideShoppingCart = styled.div`
  width: 200px;
  height: 400px;
  background: #f1f1f1;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`

function SideShoppingCart(props) {
  return (
    <StyledSideShoppingCart>
      Корзина
    </StyledSideShoppingCart>
  )
}

export default SideShoppingCart

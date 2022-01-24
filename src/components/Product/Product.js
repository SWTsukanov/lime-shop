import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating';
import ButtonProduct from '../Button/ButtonProduct';

const StyledProduct = styled.div`
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  transition: .2s;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`

const StyledProductHeader = styled.div`
  position: relative;
  background: url(${(props) => props.image}) center no-repeat;
  background-size: contain;
  height: 150px;
  margin-bottom: 15px;
`

const StyledProductTitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  color: #333333;
  margin: 10px 0;
`

const StyledProductContent = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 8px;
  
  p {
    color: #333333;    
  }
  
  span {
    color: #b4b4b4;
  }
`

const StyledProductPriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const StyledProductPriceWithDiscount = styled.h5`
  font-weight: bold;
  font-size: 18px;
  color: #ff5c00;
  margin-right: 10px;
`

const StyledProductPrice = styled.h5`
  font-weight: 500;
  font-size: 12px;
  color: #333333;
  text-decoration: line-through #ff5c00;
  ${(props) => !props.discount ? 'display: none' : 'display: inline'}
`

function Product(props) {
  const { productId, title, proteins, fats, carbohydrates, image, price, discount, rating } = props
  return (
    <StyledProduct>
      <StyledProductHeader image={image}/>
      <Rating rating={rating}/>
      <StyledProductTitle>{title}</StyledProductTitle>
      <StyledProductContent>
        <p><span>Белки: </span>{proteins}</p>
        <p><span>Жиры: </span>{fats}</p>
        <p><span>Углеводы: </span>{carbohydrates}</p>
      </StyledProductContent>
      <StyledProductPriceContainer>
        <StyledProductPriceWithDiscount>
          {discount ? (price - (price * (discount / 100))) : price} руб.
        </StyledProductPriceWithDiscount>
        <StyledProductPrice discount={discount}>
          {price} руб.
        </StyledProductPrice>
      </StyledProductPriceContainer>
      <ButtonProduct text="Добавить в корзину" icon="/icons/shopping-cart.svg"/>
    </StyledProduct>
  )
}

export default Product

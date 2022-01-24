import React from 'react'
import styled from 'styled-components'
import Product from '../Product/Product';
import ProductList from '../ProductList/ProductList';

const StyledProductBlock = styled.section`
  margin-bottom: 32px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 13px 10px;
  overflow-x: hidden;
`

const StyledProductBlockHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
`

const StyledProductTitle = styled.div`
  
  h2 {
    font-weight: bold;
    font-size: 24px;
    color: #333333;
    margin-bottom: 5px;
  }   
`

const StyledProductTitleLine = styled.div`
  width: 118px;
  height: 4px;
  background: ${(props) => props.color};
  border-radius: 10px;
`

const StyledProductLink = styled.a`
  text-decoration: none;
  position: relative;
  font-size: 14px;
  color: #333333;
  margin-right: 50px;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 22px;
    height: 11px;
    right: -44px;
    top: 4px;
    background-image: url('/icons/arrow-right.svg');
  }
`

function ProductBlock(props) {
  const { title, color } = props
  return (
    <StyledProductBlock>
      <StyledProductBlockHeader>
        <StyledProductTitle>
          <h2>{title}</h2>
          <StyledProductTitleLine color={color} />
        </StyledProductTitle>
        <StyledProductLink>
          Смотреть все
        </StyledProductLink>
      </StyledProductBlockHeader>
      <ProductList numberOfItems={7} />
    </StyledProductBlock>
  )
}

export default ProductBlock

import React from 'react'
import styled from 'styled-components'
import Product from '../Product/Product';
import {productsData} from '../../Data/products-data';

const StyledProductList = styled.div`
  display: inline-flex;
  column-gap: 10px;
`

function ProductList(props) {
  const { numberOfItems } = props
  return (
    <StyledProductList className="LIST">
      {productsData.slice(0, numberOfItems).map((el) => (
        <Product
          key={el.productId}
          productId={el.productId}
          title={el.title}
          proteins={el.proteins}
          fats={el.fats}
          carbohydrates={el.carbohydrates}
          image={el.image}
          price={el.price}
          discount={el.discount}
          rating={el.rating} />
      ))}
    </StyledProductList>
  )
}

export default ProductList

import React from 'react'
import styled from 'styled-components'

const StyledRating = styled.div`
  display: flex;
  align-items: center;
  
  h5 {
    font-weight: bold;
    font-size: 14px;
    color: #FFC107;
    margin-left: 5px;
  }
`

const StyledStar = styled.div`
  background: url(${(props) => props.positive ? '/icons/star-positive.svg' : '/icons/star-negative.svg'}) center no-repeat;
  background-size: contain;
  width: 12px;
  height: 12px;
  margin-right: 4px;
`

function Rating(props) {
  const { rating } = props
  const MAX_STARS = 5;
  const arrayOfStars = []
  for (let i = 1; i <= Math.floor(rating); i++) {
    arrayOfStars.push(true)
  }
  for (let i = 1; i <= MAX_STARS - (Math.floor(rating)); i++) {
    arrayOfStars.push(false)
  }
  return (
    <StyledRating>
      {arrayOfStars.map((el, ind) => (
        <StyledStar positive={el} key={ind}/>
      ))}
      <h5>{rating}</h5>
    </StyledRating>
  )
}

export default Rating

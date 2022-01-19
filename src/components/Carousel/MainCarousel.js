import React from 'react'
import styled from 'styled-components'
import {mainCarouselData} from '../../Data/main-carousel-data';

const StyledMainCarousel = styled.div`
  position: relative;
  margin-bottom: 50px;
`

const StyledMainCarouselItem = styled.div`
  width: 855px;
  height: 360px;  
  ${(props) => {
      if (props.bgColor) {
        return `background: url(${props.image}) right 10% bottom 10% no-repeat, ${props.bgColor};`
      }
      return `background-image: url(${props.image}) center no-repeat;`
    }
  }
  background-size: contain;
  border-radius: 10px;
  padding: 60px 20px 40px 50px;
`

const StyledMainCarouselTitle = styled.div`
  font-weight: bold;
  font-size: 42px;
  line-height: 51px;
  color: #ffffff;
  max-width: 350px;
  margin-bottom: 25px;
`

const StyledMainCarouselSubTitle = styled.div`
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  margin-bottom: 70px;
`

const StyledMainCarouselButton = styled.button`
  padding: 10px 25px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
`

function MainCarousel() {
  return (
    <StyledMainCarousel>
      {mainCarouselData.map((el) => {
        return (
          <StyledMainCarouselItem key={el.mainCarouselItemId} image={el.image} bgColor={el.bgColor}>
            <StyledMainCarouselTitle>
              {el.title}
            </StyledMainCarouselTitle>
            <StyledMainCarouselSubTitle>
              {el.subTitle}
            </StyledMainCarouselSubTitle>
            <StyledMainCarouselButton>
              {el.buttonTitle}
            </StyledMainCarouselButton>
          </StyledMainCarouselItem>
        )
      })}
    </StyledMainCarousel>
  )
}

export default MainCarousel

import React from 'react'
import styled from 'styled-components'
import {mainCarouselData} from '../../Data/main-carousel-data';

const StyledMainCarousel = styled.div`
  position: relative;
  margin-bottom: 50px;
  height: 360px;
`

const StyledMainCarouselItem = styled.div`
  width: 855px;
  height: 360px;
  ${(props) => {
      if (props.bgColor) {
        return `
          background: url(${props.image}) right 0 bottom 0 no-repeat, ${props.bgColor};
          background-size: contain;
        `
      }
      return `
        background: url(${props.image}) center no-repeat;
        background-size: cover;
      `
    }
  }  
  border-radius: 10px;
  padding: 60px 20px 40px 50px;
  position: absolute;
  transition: .5s;
  ${(props) => {
      switch (props.order) {
        case 1:
          return `
            top: 0;
            left: 0;
            opacity: 1;
            z-index: 4;
          `
        case 2:
          return `
            top: 0;
            left: 120px;
            opacity: 1;
            z-index: 3;
            transform: scale(0.95);
            transform-origin: right;
          `
        case 3:
          return `
            top: 0;
            right: 0;
            opacity: 1;
            z-index: 2;
            transform: scale(0.9);
            transform-origin: right;
          `
        default:
          return `
            top: 0;
            right: 0;
            opacity: 0;
            z-index: 1;
            transform: scale(0.9);
            transform-origin: right;
          `
      }
    }
  }
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

const StyledControlButton = styled.button`
  position: absolute;
  border: none;
  width: 27px;
  height: 72px;
  top: 50%;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 5;
  ${(props) => {
    if (props.direction === 'left') {
      return `        
        left: 0;
        transform: translate(-50%, -50%);        
        &:before {
          content: url('/icons/arrow-angle-left.svg');
        }
      `
    }
    if (props.direction === 'right') {
      return `        
        right: 0;
        transform: translate(-182px, -50%);
        &:before {
          content: url('/icons/arrow-angle-right.svg');
        }
      `
    }
  }}
  cursor: pointer;
`

const StyledControlDots = styled.div`
  position: absolute;
  bottom: 20px;
  right: 21%;
  display: flex;
  column-gap: 5px;
  z-index: 5;
`

const StyledControlDotItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
  transition: .2s;
  opacity: ${(props) => props.active ? 1 : 0.3};
  
  &:hover {
    opacity: 1;
  }
`

function MainCarousel() {
  return (
    <StyledMainCarousel>
      {mainCarouselData.map((el, ind) => {
        return (
          <StyledMainCarouselItem key={el.mainCarouselItemId} image={el.image} bgColor={el.bgColor} order={ind+1}>
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
        <StyledControlButton direction={'left'} />
        <StyledControlButton direction={'right'} />
        <StyledControlDots>
          {mainCarouselData.map((el, ind) => <StyledControlDotItem key={ind}/>)}
        </StyledControlDots>
    </StyledMainCarousel>
  )
}

export default MainCarousel

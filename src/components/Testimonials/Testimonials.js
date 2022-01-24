import React from 'react'
import styled from 'styled-components'
import { testimonialsData } from '../../Data/testimonials-data';
import ButtonControl from '../Button/ButtonControl'

const StyledTestimonials = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background: #f8f8f8;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: relative;
  margin-bottom: 32px;
`

const StyledTitleSection = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2 {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 15px;
  }
  
  button {
    width: 174px;
    height: 36px;
    background: #A1D214;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
  }
`

const StyledTestimonialsList = styled.div`
  display: flex;
  column-gap: 32px;
  
  div {
    max-width: 160px;
  }
`

const StyledTestimonialTitle = styled.h4`
  font-weight: 600;
  font-size: 10px;
  line-height: 24px;
  color: #333333;
  margin-bottom: 5px;
  position: relative;
  transform: translateX(22px);
  
  &:before {
    content: '';
    width: 12px;
    height: 14px;  
    background: url("/icons/user.svg") center no-repeat;
    background-size: contain;
    position: absolute;
    top: 50%;
    left: -22px;
    transform: translateY(-50%);
  }
`

const StyledTestimonialArticle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #333333;
`

const StyledTestimonialLink = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: underline;
  color: #93C10E;
  margin-left: 10px;
  cursor: pointer;
`

const StyledOpacityGradient = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  border-radius: 10px;
  z-index: 2;
`

const StyledButtonControl = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 3;
`

function Testimonials(props) {
  const { numberOfItems } = props
  return (
    <StyledTestimonials>
      <StyledTitleSection>
        <h2>Отзывы о лайме</h2>
        <button>Написать отзыв</button>
      </StyledTitleSection>
      <StyledTestimonialsList>
        {testimonialsData.slice(0, numberOfItems).map((el) => (
          <div key={el.testimonialId}>
            <StyledTestimonialTitle>{el.title}</StyledTestimonialTitle>
            <StyledTestimonialArticle>
              {el.article.substr(0, 230)}...
              <StyledTestimonialLink href="#">еще</StyledTestimonialLink>
            </StyledTestimonialArticle>
          </div>
        ))}
      </StyledTestimonialsList>
      <StyledOpacityGradient />
      <StyledButtonControl>
        <ButtonControl direction="right" />
      </StyledButtonControl>
    </StyledTestimonials>
  )
}

export default Testimonials

import React from 'react'
import styled from 'styled-components'
import { newsData } from '../../Data/news-data';

const StyledNewsList = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 20px;
`

const StyledNewsImage = styled.div`
  background: url(${(props) => (props.image)}) center no-repeat;
  background-size: cover;
  width: 250px;
  height: 160px;
  border-radius: 10px;
  margin-bottom: 25px;
`

const StyledNewsTitle = styled.h4`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
  margin-bottom: 15px;
`

const StyledNewsItemLink = styled.p`
  text-decoration: underline;
  font-family: Montserrat;
  font-size: 12px;
  color: #333333;
  opacity: 0.5;
  position: absolute;
  bottom: 0;
  left: 0;
`

const StyledNewsItem = styled.div`
  width: 250px;
  height: 350px;
  overflow-y: hidden;
  position: relative;
  
  &:hover {
    
    ${StyledNewsImage} {
      box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.2);
    }

    ${StyledNewsTitle} {
      color: #A1D214;
    }

    ${StyledNewsItemLink} {
      opacity: 1;
    }
  }
`

const StyledNewsArticle = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  color: #333333;
  opacity: 0.7;
`

const StyledOpacityGradient = styled.a`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 8%, rgba(255, 255, 255, 0) 25%);
  cursor: pointer;
`

function NewsList(props) {
  const { numberOfItems } = props
  console.log(numberOfItems)
  return (
    <StyledNewsList>
      {newsData.slice(0, numberOfItems).map((el) => (
        <StyledNewsItem>
          <StyledNewsImage image={el.images[0].url} />
          <StyledNewsTitle>{el.title}</StyledNewsTitle>
          <StyledNewsArticle>{el.article.substr(1, 230)}</StyledNewsArticle>
          <StyledNewsItemLink>Читать дальше</StyledNewsItemLink>
          <StyledOpacityGradient href="#"/>
        </StyledNewsItem>
      ))}
    </StyledNewsList>
  )
}

export default NewsList

import React from 'react'
import styled from 'styled-components'
import NewsList from '../NewsList/NewsList';

const StyledNewsBlockHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const StyledNewsTitle = styled.div`
  
  h2 {
    font-weight: bold;
    font-size: 18px;
    color: #333333;
    margin-bottom: 7px;
  }
  
  div {
    width: 118px;
    height: 4px;
    background: #A1D214;
    border-radius: 10px;
  }
`

const StyledNewsLink = styled.a`
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

function NewsBlock() {

  return (
    <>
      <StyledNewsBlockHeader>
        <StyledNewsTitle>
          <h2>Новости Лайма</h2>
          <div></div>
        </StyledNewsTitle>
        <StyledNewsLink>
          Все новости
        </StyledNewsLink>
      </StyledNewsBlockHeader>
      <NewsList numberOfItems={4} />
    </>
  )
}

export default NewsBlock

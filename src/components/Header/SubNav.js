import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar'
import ButtonTab from '../Button/ButtonTab';
import ButtonDrop from '../Button/ButtonDrop';

const StyledSubNav = styled.div`
  width: 100%;
  height: 75px;
  background-color: #ffffff;
  display: flex;
  padding: 0 25px 0 160px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0 100px;
`

const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 25px;
`

function SubNav() {
  return (
    <StyledSubNav>
      <Button text='Каталог' icon={'./icons/search-with-lines.svg'} />
      <SearchBar />
      <ButtonDrop text='Скидки' icon='%' />
      <StyledNav>
          <ButtonTab text='Кабинет' icon={'./icons/user.svg'} />
          <ButtonTab text='Избранное' icon={'./icons/heart.svg'} />
          <ButtonTab text='Корзина' icon={'./icons/shopping-cart.svg'} />
      </StyledNav>
    </StyledSubNav>
  )
}

export default SubNav

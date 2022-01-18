import React from 'react'
import styled from 'styled-components'

const StyledTopNav = styled.div`
  width: 100%;
  height: 45px;
  background-color: #5f5f5f;
  display: flex;
  padding: 0 25px 0 195px;
  align-items: center;
  justify-content: space-between;
`

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  column-gap: ${(props) => (props.smallGap ? '35px' : '40px')};
`

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: ${(props) => {
    switch (props.size) {
      case 'big':
        return '18px'
      case 'small':
        return '12px'
      default:
        return '14px'
    }
  }};
  line-height: 22px;
  color: ${(props) => (props.lime ? '#A1D214' : '#ffffff')};
  font-weight: ${(props) => (props.bold ? 'bold' : '500')};
  cursor: pointer;
`

const StyledIcon = styled.div`
  width: 15px;
  height: 15px;
  background: url(${(props) => (props.url)}) center no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  color: #333333;
  cursor: pointer;
`

function TopNav() {
  return (
    <StyledTopNav>
      <div>
        <nav>
          <StyledList smallGap>
            <StyledListItem bold size='big'>
              <StyledIcon url={'/icons/call.svg'}/>
              7756
            </StyledListItem>
            <StyledListItem bold>
              <StyledIcon url={'/icons/geo.svg'}/>
              Зона доставки
            </StyledListItem>
            <StyledListItem bold>
              <StyledIcon url={'/icons/clock.svg'}/>
              17:45 - 20:45
            </StyledListItem>
          </StyledList>
        </nav>
      </div>
      <div>
        <nav>
          <StyledList>
            <StyledListItem size='small'>Шеф-лайм</StyledListItem>
            <StyledListItem size='small'>Вакансии</StyledListItem>
            <StyledListItem size='small'>Вопрос-ответ</StyledListItem>
            <StyledListItem size='small' lime>
              Бонусная программа
            </StyledListItem>
          </StyledList>
        </nav>
      </div>
    </StyledTopNav>
  )
}

export default TopNav

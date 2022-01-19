import React from 'react'
import styled from 'styled-components'
import LogoDark from './LogoDark';
import ButtonAppMarket from '../Button/ButtonAppMarket';

const StyledFooter = styled.footer`
  width: 100%;
  height: 450px;
  background-color: #333333;
  padding: 90px 120px 90px 60px;
  display: flex;
  justify-content: space-between;
`

const StyledInfo = styled.div`
  width: 260px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  color: #FFFFFF;
  opacity: 0.7;
  
  .link {
    text-decoration: none;
    color: #a1d214;
    cursor: pointer;
  }
`

const StyledFooterNav = styled.div`

`

const StyledNavTitle = styled.h3`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  opacity: 0.3;
  margin-bottom: 20px;
`

const StyledNavList = styled.ul`
  list-style: none;
  
  li {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    line-height: 32px;
    
    a {
      text-decoration: none;
      color: #ffffff;
      cursor: pointer;
    }
  }
`

const Contacts = styled.div`

`

const StyledContactsTitle = styled.h4`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 15px;
`

const StyledPhoneNumber = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 18px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 42px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 40px;
`

const StyledNumberIcon = styled.div`
  width: 25px;
  height: 25px;
  background: url("/icons/call.svg") center no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  color: #333333;
  cursor: pointer;
`

function Footer() {
  return (
    <StyledFooter>
      <StyledInfo>
        <LogoDark />
        <div>
          <p>
            © 2001–2021 ООО «Лайм»
          </p>
          <br />
          <p>
            Все права защищены. «Лайм» является зарегистрированным товарным знаком Lime Holding SA.
          </p>
          <br />
          <a className="link" href="#">
            Политика Конфиденциальности
          </a>
        </div>
      </StyledInfo>
      <StyledFooterNav>
        <StyledNavTitle>
          О компании
        </StyledNavTitle>
        <StyledNavList>
          <li><a href="#">Доставка и оплата</a></li>
          <li><a href="#">Вопрос-ответ</a></li>
          <li><a href="#">Поставщикам</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Политика</a></li>
        </StyledNavList>
      </StyledFooterNav>
      <StyledFooterNav>
        <StyledNavTitle>
          Покупателям
        </StyledNavTitle>
        <StyledNavList>
          <li><a href="#">Бонусная система</a></li>
          <li><a href="#">Как вернуть</a></li>
          <li><a href="#">Как заказать</a></li>
          <li><a href="#">Программа лояльности</a></li>
          <li><a href="#">Акции</a></li>
          <li><a href="#">Шеф-лайм</a></li>
        </StyledNavList>
      </StyledFooterNav>
      <Contacts>
        <StyledContactsTitle>
          Круглосуточная поддержка
        </StyledContactsTitle>
        <StyledPhoneNumber href="tel:7756">
          <StyledNumberIcon />
          7756
        </StyledPhoneNumber>
        <ButtonAppMarket text='Скачать в AppStore' icon={'/icons/apple-store.svg'} />
        <ButtonAppMarket text='Скачать в Play Market' icon={'/icons/android-store.svg'} />
      </Contacts>
    </StyledFooter>
  )
}

export default Footer

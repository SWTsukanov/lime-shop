import React from 'react'
import styled from 'styled-components'
import Advantages from '../../components/Advantages/Advantages';
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import Survey from '../../components/Survey/Survey';
import MainCarousel from '../../components/Carousel/MainCarousel';
import Testimonials from '../../components/Testimonials/Testimonials';

const StyledHomeSection = styled.div`
  width: 100%;
  max-width: 1110px;
  background-color: #ffffff;
  padding: 20px 30px 50px 30px;
`

function HomeSection() {
  return (
    <StyledHomeSection>
      <MainCarousel />
      <Advantages />
      <NewsBlock />
      <div>
        Discounts
      </div>
      <div>
        New goods
      </div>
      <Testimonials numberOfItems={4} />
      <div>
        Vegan choise
      </div>
      <div>
        Popular
      </div>
      <div>
        Info
      </div>
      <Survey
        title="ПОМОГИТЕ НАМ СТАТЬ ЛУЧШЕ"
        question="Удобно ли вам совершать покупки через наш Онлайн-Каталог?"
        variantOne="Да, легко найти товары"
        variantTwo="В магазине удобнее"
        variantThree="Пользуюсь поиском на сайте"
      />
    </StyledHomeSection>
  )
}

export default HomeSection

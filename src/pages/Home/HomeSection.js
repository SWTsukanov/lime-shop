import React from 'react'
import styled from 'styled-components'
import Advantages from '../../components/Advantages/Advantages';
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import Survey from '../../components/Survey/Survey';
import MainCarousel from '../../components/Carousel/MainCarousel';
import Testimonials from '../../components/Testimonials/Testimonials';
import ProductBlock from '../../components/ProductBlock/ProductBlock';

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
      <ProductBlock title="Акционные продукты" color="linear-gradient(90deg, #FFA800 0%, #FFC709 100%), #A1D214;" />
      <ProductBlock title="Новинки" color="linear-gradient(90deg, #00D1FF 0%, #17BADE 0.01%, #14D28E 100%), #A1D214;" />
      <Testimonials numberOfItems={4} />
      <ProductBlock title="Выбор вегана" color="linear-gradient(90deg, #76B852 0%, #8DC26F 100%), #A1D214;" />
      <ProductBlock title="Популярное" color="linear-gradient(90deg, #FF5C00 0%, #FF9900 100%), #A1D214;" />
      {/*  Info*/}
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

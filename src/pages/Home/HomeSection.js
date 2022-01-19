import React from 'react'
import styled from 'styled-components'
import Advantages from '../../components/Advantages/Advantages';
import NewsBlock from '../../components/NewsBlock/NewsBlock';

const StyledHomeSection = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 20px 30px;
`

function HomeSection() {
  return (
    <StyledHomeSection>
      <div>
        Main slider
      </div>
      <Advantages />
      <NewsBlock />
      <div>
        Discounts
      </div>
      <div>
        New goods
      </div>
      <div>
        testimonials
      </div>
      <div>
        Vegan choise
      </div>
      <div>
        Popular
      </div>
      <div>
        Info
      </div>
      <div>
        survey
      </div>
    </StyledHomeSection>
  )
}

export default HomeSection

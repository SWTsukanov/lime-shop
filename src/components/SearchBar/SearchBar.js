import React from 'react'
import styled from 'styled-components'

const StyledSearchBar = styled.input`
  width: 100%;
  height: 45px;
  background-color: #f1f1f1;
  border-radius: 10px;
  border: none;
  display: flex;
  padding: 0 55px 0 25px;
  margin: 0 15px;
  align-items: center;
  color: #333333;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  cursor: text;
  background-image: url('/icons/search.svg');
  background-repeat: no-repeat;
  background-position: center right 15px;
  -webkit-appearance: none;

  &:placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
  }
`

function SearchBar() {
  return <StyledSearchBar type='text' placeholder='Купить молоко' />
}

export default SearchBar

import React from 'react'
import styled from 'styled-components'

const StyledLogoDark = styled.div`
  width: 210px;
  height: 135px;
  transform: translateY(-40px);
  background: url("/icons/logo-dark.svg") center no-repeat;
`

function LogoDark() {
  return (
    <StyledLogoDark />
  )
}

export default LogoDark
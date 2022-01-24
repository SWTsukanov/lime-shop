import React from 'react'
import styled from 'styled-components'

const StyledButtonControl = styled.button`
  border: none;
  width: 27px;
  height: 72px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  ${(props) => {
  if (props.direction === 'left') {
    return `        
        left: 0;
        transform: translate(-50%, -50%);        
        &:before {
          content: url('/icons/arrow-angle-left.svg');
        }
      `
  }
  if (props.direction === 'right') {
    return `        
        right: 0;
        transform: translate(50%, -50%);
        &:before {
          content: url('/icons/arrow-angle-right.svg');
        }
      `
  }
}}
  cursor: pointer;
`

function ButtonControl(props) {
  const { direction } = props
  return (
      <StyledButtonControl direction={direction} />
  )
}

export default ButtonControl
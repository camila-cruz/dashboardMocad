import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.bgcolor};
  padding: 7px 14px;
  &:hover {
    background-color: ${(props) => props.hovercolor};
  }
  & .MuiButton-label {
    color: #fff;
  }
`;

export default function SButton({ bgcolor, hovercolor, children, ...props }) {
  return (
    <StyledButton {...props} bgcolor={bgcolor} hovercolor={hovercolor}>
      {children}
    </StyledButton>
  );
}

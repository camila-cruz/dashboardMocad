import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  background-color: ${(props) => props.bgColor};
  padding: 7px 14px;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  & .MuiButton-label {
    color: #fff;
  }
`;

export default function SButton({ bgColor, hoverColor, children, ...props }) {
  return (
    <StyledButton {...props} bgColor={bgColor} hoverColor={hoverColor}>
      {children}
    </StyledButton>
  );
}

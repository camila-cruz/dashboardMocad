import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';

const StyledAppBar = styled(AppBar)`
  ${({ theme }) => `
    border-bottom: 2px solid ${theme.palette.common.border};
  `}
`;

export default function SAppBar({ children, ...props }) {
  return (
    <>
      <StyledAppBar {...props}>{children}</StyledAppBar>
    </>
  );
}

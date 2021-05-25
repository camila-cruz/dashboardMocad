import styled from 'styled-components';
import { Dialog as MuiDialog } from '@material-ui/core';

const Wrapper = styled(MuiDialog)`
  ${({ theme }) => `
    .MuiBackdrop-root {
    background-color: ${theme.palette.dialog.backdrop};
    }
    .MuiPaper-root {
      background-color: ${theme.palette.content.background};
    }
  `}
`;

export default function Dialog({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

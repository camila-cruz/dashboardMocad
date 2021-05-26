import styled from 'styled-components';

const Container = styled.div`
  ${({ theme }) => `
    width: 100vw;
    height: calc(100vh - 66px);
    background-color: ${theme.palette.content.background};
    padding: 20px 40px 0;
    color: #fff;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    width: 15px;
  }

    @media(min-width: 960px) {
      margin-left: 240px;
      width: calc(100vw - 240px);
    }
  `}
`;

const Container2 = styled.div`
  ${() => `
    width: 1000px;
  }
  `}
`;

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

export function Wrapper2({ children }) {
  return <Container2>{children}</Container2>;
}

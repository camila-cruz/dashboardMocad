import styled from 'styled-components';

const Container = styled.div`
  ${({ theme }) => `
    width: 100vw;
    height: calc(100vh - 66px);
    background-color: ${theme.palette.primary.main};
    padding: 40px 40px;
    color: #fff;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

    @media(min-width: 960px) {
      margin-left: 240px;
      width: calc(100vw - 240px);
    }
  `}
`;

const Container = styled.div`
  ${({ theme }) => `
    width: 100vw;
    height: calc(100vh - 66px);
    background-color: ${theme.palette.primary.main};
    padding: 40px 40px;
    color: #fff;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

    @media(min-width: 960px) {
      margin-left: 240px;
      width: calc(100vw - 240px);
    }
  `}
`;

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

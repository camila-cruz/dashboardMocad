import styled from 'styled-components';

const TitleContainer = styled.div`
  padding: 5px 0;
  > h1 {
    color: ${(props) => props.theme.palette.common.white};
    font-size: 32px;
    margin: 0;
    line-height: 1.3;

    &::after {
      content: '';
      display: block;
      border-bottom: 5px solid ${(props) => props.theme.palette.primary.main};
    }
  }
`;

export default function Title({ children }) {
  return (
    <TitleContainer>
      <h1>{children}</h1>
    </TitleContainer>
  );
}

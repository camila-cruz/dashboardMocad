import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    border-right: 2px solid #8e95c0;
    color: #fff;
    padding: 12px 12px;
  }

  th:last-child,
  td:last-child {
    border-right: 0;
  }

  th {
    font-size: 14px;
    font-weight: 700;
  }

  thead tr {
    background-color: rgb(100 255 218 / 29%);
  }

  tbody tr {
    background-color: #5766b8;
    border: 0;
  }

  tbody tr:nth-child(even) {
    background-color: #7280c2;
  }

  tbody tr:hover {
    background-color: #69729e;
  }
`;

export default StyledTable;

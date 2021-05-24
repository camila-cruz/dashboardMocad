import React from 'react';
import styled from 'styled-components';

import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useTable, usePagination } from 'react-table';

import makeData from './makeData';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );

  const MauTableStyled = styled(MaUTable)`
    ${({ theme }) => `

    & .MuiTableHead-root {

    }

    & .MuiTableCell-root {
      border: .5px solid ${theme.palette.common.white};
      color: ${theme.palette.common.white};
    }

    & .MuiTableCell-head {
      font-weight: 700;
      font-size: 1rem;
      background-color:#39a088;
    }

    & .MuiTableBody-root {
      background-color:#343c6b
    }

    & .MuiTableCell-body {
      color: ${theme.palette.common.white};
    }

  `}
  `;
  // Render the UI for your table
  return (
    <MauTableStyled stickyHeader {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup, idx) => (
          <TableRow key={`1-${idx}`} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, idx) => (
              <TableCell
                align="center"
                key={`2-${idx}`}
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, idx) => {
          prepareRow(row);
          return (
            <TableRow key={`3-${idx}`} {...row.getRowProps()}>
              {row.cells.map((cell, idx) => {
                console.log(cell.column.Header);
                return (
                  <TableCell
                    align={cell.column.Header === 'Status' ? 'center' : 'left'}
                    key={`4-${idx}`}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MauTableStyled>
  );
}

export default function MuiTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'firstName',
      },
      {
        Header: 'Sobrenome',
        accessor: 'lastName',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    [],
  );

  const data = React.useMemo(() => makeData(200), []);
  console.log(data);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useTable, usePagination } from 'react-table';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import makeData from './makeData';

import StyledTable from './styles';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
  );

  useEffect(() => {
    screen.height <= 800 ? setPageSize(7) : setPageSize(10);
  }, [setPageSize]);

  const { pageIndex } = state;

  return (
    <>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, idx) => (
            <tr key={`1-${idx}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <th
                  align="center"
                  key={`2-${idx}`}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {page.map((row, idx) => {
            prepareRow(row);
            return (
              <tr key={`3-${idx}`} {...row.getRowProps()}>
                {row.cells.map((cell, idx) => {
                  return (
                    <td
                      align={
                        cell.column.Header === 'Status' ? 'center' : 'left'
                      }
                      key={`4-${idx}`}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
                <td>Teste</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
      <Grid container alignItems="center" justify="flex-end">
        <Typography variant="subtitle1">
          Página{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}{' '}
          </strong>
        </Typography>

        <IconButton
          color="primary"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          color="primary"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Grid>
    </>
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

  const data = React.useMemo(() => makeData(30), []);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

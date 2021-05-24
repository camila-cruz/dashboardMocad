import React from 'react';

import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useTable } from 'react-table';

import makeData from './makeData';

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup, idx) => (
          <TableRow key={`1-${idx}`} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, idx) => (
              <TableCell key={`2-${idx}`} {...column.getHeaderProps()}>
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
                return (
                  <TableCell key={`4-${idx}`} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
}

export default function MuiTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  );

  const data = React.useMemo(() => makeData(10), []);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

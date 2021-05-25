import React, { useEffect, useState } from 'react';

import { useTable, usePagination } from 'react-table';

import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '../Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import makeData from './makeData';

import StyledTable from './styles';
import Title from '../Title';

function Table({ columns, data, handleClickOpen }) {
  const theme = useTheme();

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
              <th>Ações</th>
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
                <td style={{ width: '150px' }}>
                  <Grid container justify="space-around">
                    <IconButton onClick={handleClickOpen}>
                      <EditIcon style={{ fill: theme.palette.common.white }} />
                    </IconButton>
                    <IconButton>
                      <DeleteForeverIcon
                        style={{ fill: theme.palette.common.white }}
                      />
                    </IconButton>
                  </Grid>
                </td>
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
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
    <>
      <Table columns={columns} data={data} handleClickOpen={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Grid container justify="center">
            <Title>Edit</Title>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

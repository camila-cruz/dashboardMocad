import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Wrapper, Wrapper2 } from '../src/components/commons/Wrapper';
import Title from '../src/components/commons/Title';
import Table from '../src/components/commons/Table';

export default function Index() {
  return (
    <>
      <Wrapper>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ marginBottom: 32 }}
        >
          <Title>Users</Title>
          <Grid item>
            <Button variant="contained" color="primary">
              Adicionar
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Wrapper2>
            <Table />
          </Wrapper2>
        </Grid>
      </Wrapper>
    </>
  );
}

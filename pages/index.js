import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '../src/components/commons/Button';
import { useTheme } from '@material-ui/core/styles';
import Wrapper from '../src/components/commons/Wrapper';
import Title from '../src/components/commons/Title';
import MuiTable from '../src/components/commons/Table/MuiTable';

export default function Index() {
  const theme = useTheme();
  return (
    <Wrapper>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{ marginBottom: 64 }}
      >
        <Title lineColor={theme.palette.common.hoverColor}>Users</Title>
        <Grid item>
          <Button
            variant="contained"
            bgColor={theme.palette.common.bgColor}
            hoverColor={theme.palette.common.hoverColor}
          >
            Adicionar
          </Button>
        </Grid>
      </Grid>
      <MuiTable />
    </Wrapper>
  );
}

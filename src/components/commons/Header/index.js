import React from 'react';
import Image from 'next/image';
import Link from '../Link';

import { useTheme } from '@material-ui/core/styles';
import AppBar from '../AppBar';
import Drawer from '../Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { drawerItens } from './data';

export default function ButtonAppBar() {
  const theme = useTheme();

  const drawer = (
    <>
      <List>
        {drawerItens.map((item, index) => (
          <ListItem
            button
            key={`drawerItem-${index}`}
            component={Link}
            href={item.link}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  );

  return (
    <>
      <AppBar elevation={0} position="relative">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              style={{ marginRight: theme.spacing(2) }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Box display="flex" flexGrow="1" justifyContent="center">
            <Link href="/">
              <Hidden xsDown>
                <Image src="/assets/darkBrand.svg" width={190} height={32} />
              </Hidden>
              <Hidden smUp>
                <Image src="/assets/darkBrand.svg" width={152} height={26} />
              </Hidden>
            </Link>
          </Box>

          <Button variant="contained" color="primary">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Hidden smDown>
        <Drawer variant="permanent" open>
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
}

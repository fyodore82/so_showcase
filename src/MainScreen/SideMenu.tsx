import React, { FC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import { drawerWidth } from '../Constants'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      flexShrink: 0,
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,


      }
    },
    drawerPaper: {
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,

      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,

      }
    },
    toolbar: theme.mixins.toolbar,
  }),
);

export const SideMenu: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      {children}
    </Drawer>
  )
}
import React, { FC } from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      margin: '1rem',
    },
  }),
);

export const Home: FC = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Typography paragraph className={classes.typography}>
        This application will fetch selected posts from StackOverflow and present them
        grouped by primary Tag.
</Typography>
      <Typography paragraph className={classes.typography}>
        Application (SPA) is based on:
      <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Redux for storing state (questions and answers)</li>
          <li>Redux-Saga for async actions like fetching posts</li>
          <li>Storybook for developing components in isolation</li>
          <li>Jest for unittesting</li>
          <li>Material UI for building interface</li>
        </ul>
      </Typography>
      <Typography paragraph className={classes.typography}>
        Source is located on <Link href='https://github.com/fyodore82/so_showcase'>GitHub</Link>
      </Typography>
      <Typography paragraph className={classes.typography}>
        Then app is built and put on gist where you can explore it.
      </Typography>
      <Typography paragraph className={classes.typography}>
        Hope you enjoy it!
      </Typography>
    </Paper>
  )
}
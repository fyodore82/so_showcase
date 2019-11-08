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
    header: {
      fontWeight: 'bold',
      margin: '1rem',
    },
  }),
);

export const Home: FC = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Typography className={classes.header}>
        Reasons to create this app
      </Typography>
      <Typography paragraph className={classes.typography}>
        I carefully read Auth0 requirements for several jobs
        and many time seen suggestion to give link for personal blog.
        <br />
        I'm not active blogger (may be yet?) so I've decided to share my best posts on StackOverflow.
        They can be considered as short blog posts.
        <br />
        Also this app is located on glitch.com to showcase my development shills
      </Typography>
      <Typography className={classes.header}>
        How does it works
      </Typography>
      <Typography paragraph className={classes.typography}>
        This application will fetch selected posts from StackOverflow and present them
        grouped by primary Tag.
</Typography>
      <Typography paragraph className={classes.typography} component='div'>
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
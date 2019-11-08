import React, { FC, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Popper from '@material-ui/core/Popper';
import { ReferenceObject } from 'popper.js'
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { ApplicationState } from './store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popper: {
      zIndex: 10000,
    },
    card: {
      backgroundColor: 'lightpink',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }),
);

interface ErrorPopperStateProps {
  answersError?: string
}

type ErrorPopperProps = ErrorPopperStateProps;

export const ErrorPopper: FC<ErrorPopperProps> = ({ answersError }) => {

  const classes = useStyles();
  const ahchorEi: ReferenceObject = {
    clientHeight: 100,
    clientWidth: 200,
    getBoundingClientRect: (): ClientRect => ({
      bottom: 0,
      right: 0, 
      top: 20,
      left: 20,
      height: 100,
      width: 100,
    }) 
  };
  const [opened, setOpened] = useState(false);
  
  const errorText = [answersError].join(' ').trim();
  useEffect(() => {
    if (errorText)
      setOpened(true);
  }, [errorText]);

  return (<Popper id='errorPopper' open={opened} anchorEl={ahchorEi} transition className={classes.popper}>
    {({ TransitionProps }) => (
      <Fade {...TransitionProps} timeout={350}>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton aria-label="settings" onClick={() => setOpened(false)}>
                <CloseIcon />
              </IconButton>
            }
            title="Error"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {errorText}
            </Typography>
          </CardContent>
         </Card>
      </Fade>
    )}
  </Popper>)
}
//

export default connect<
  ErrorPopperStateProps,
  {},
  {},
  ApplicationState>
  (state => ({
    answersError: state.answers.error,
  }), {})(ErrorPopper);
import React, { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import LineralProgress from '@material-ui/core/LinearProgress'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: '4px',
      width: '100%',
    },
    expansionPanel: {
      backgroundColor: 'inherit !important',
    },
    lineralProgress: {
      width: '100%',
      height: '1rem',
    },
  }),
);

export const AnswerListItemLoading: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ExpansionPanel disabled className={classes.expansionPanel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LineralProgress className={classes.lineralProgress} />
        </ExpansionPanelSummary>
      </ExpansionPanel>

    </div>
  );
}
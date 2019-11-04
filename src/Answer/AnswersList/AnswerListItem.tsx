import React, { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

import { ItemBody } from '../ItemBody'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: '4px',
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    extensionDetail: {
      flexDirection: 'column',
    },
    expansionSummary: {
      position: 'sticky',
      top: 0,
      backgroundColor: 'inherit',
      boxShadow: '0px 2px gainsboro',
    }
  }),
);

interface AnswerListItemOwnProps {
  header: string;
  question: string;
  answer: string;
}

export const AnswerListItem: FC<AnswerListItemOwnProps> = ({
  header, question, answer
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          className={classes.expansionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} dangerouslySetInnerHTML={{'__html': header}}/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.extensionDetail}>
          <div>
          <ItemBody bodyText={question}/>
          </div>
          <Divider/>
          <ItemBody bodyText={answer}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
    </div>
  );
}
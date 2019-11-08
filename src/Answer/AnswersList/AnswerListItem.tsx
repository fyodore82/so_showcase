import React, { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

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
    },
    contentsGridItem: {
      flexGrow: 1,
      minWidth: 0,
    },
    qaGridItem: {
      fontSize: 'xx-large',
      padding: '1rem',
    },
    divider: {
      height: '3px',
      margin: '1rem',
    },
    link: {
      alignSelf: 'flex-end',
      margin: '0.5rem'
    }
  }),
);

interface AnswerListItemOwnProps {
  questionNum: string;
  header: string;
  question: string;
  answer: string;
}

export const AnswerListItem: FC<AnswerListItemOwnProps> = ({
  header, question, answer, questionNum
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
          <Typography className={classes.heading} dangerouslySetInnerHTML={{ '__html': header }} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.extensionDetail}>
          <Grid container direction="column" wrap="nowrap">
            <Grid className={classes.link} item>
              <Link  href={`https://stackoverflow.com/questions/${questionNum}`}>Link to question on StackOverflow</Link>
            </Grid>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item className={classes.qaGridItem}>
                Q
                </Grid>
              <Grid item className={classes.contentsGridItem}>
                <ItemBody bodyText={question} />
              </Grid>
            </Grid>
            <Grid item>
              <Divider className={classes.divider} />
            </Grid>
            <Grid item container direction="row" wrap="nowrap">
              <Grid item className={classes.qaGridItem}>
                A
                </Grid>
              <Grid item className={classes.contentsGridItem}>
                <ItemBody bodyText={answer} />
              </Grid>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
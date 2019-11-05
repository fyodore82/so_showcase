import React, { FC } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { AnswerListItem } from './AnswerListItem'

import { Answers } from '../../store/Answers'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    answerList: {
      overflowY: 'auto',
      overflowX: 'hidden',
    },
  }),
);

interface AnswerListOwnProps {
  answers?: Answers;
}

export const AnswerList: FC<AnswerListOwnProps> = ({ answers }) => {
  const classes = useStyles()
  return (<div className={classes.answerList}>
    {answers && Object.entries(answers).map(([k, v]) => (
      <AnswerListItem key={k} header={v.title} question={v.question} answer={v.answer} />
    ))}
    </div>
  )
}
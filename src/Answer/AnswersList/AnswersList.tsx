import React, { FC } from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import { AnswerListItem } from './AnswerListItem'
import { AnswerListItemLoading } from './AnswerListItemLoading'

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
  isLoading: boolean;
  answers?: Answers;
}

export const AnswerList: FC<AnswerListOwnProps> = ({ isLoading, answers }) => {
  const classes = useStyles()
  return (<div className={classes.answerList}>
    {isLoading ?
      <>
        <AnswerListItemLoading key={1} />
        <AnswerListItemLoading key={2} />
        <AnswerListItemLoading key={3} />
      </>
      :
      answers && Object.entries(answers).map(([k, v]) => (
        <AnswerListItem key={k} header={v.title} question={v.question} answer={v.answer} />
      ))}
  </div>
  )
}
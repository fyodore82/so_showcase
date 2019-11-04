import React, { FC } from 'react'

import { AnswerListItem } from './AnswerListItem'

import { Answers } from '../../store/Answers'

interface AnswerListOwnProps {
  answers?: Answers;
}

export const AnswerList: FC<AnswerListOwnProps> = ({ answers }) => {
  return (<>
    {answers && Object.entries(answers).map(([k, v]) => (
      <AnswerListItem key={k} header={v.title} question={v.question} answer={v.answer} />
    ))}
    </>
  )
}
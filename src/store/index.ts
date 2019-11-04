import { all, call } from 'redux-saga/effects'
import * as Answers from './Answers';

import { sagaActions } from './BackgroundTasks'

export interface ApplicationState {
  answers: Answers.AnswersState;
}

export const reducers = {
  answers: Answers.reducer,
}

export function* rootSaga() {
  yield all([
    ...Answers.sagaActions.map(call),
    ...sagaActions.map(call),
  ])
}
import { put } from 'redux-saga/effects'
import { RequestQAsAction } from './Answers'

export const sagaActions = [
  function* requestQAs () {
    yield put<RequestQAsAction>({ type: 'REQUEST_QA' });
  } 
]
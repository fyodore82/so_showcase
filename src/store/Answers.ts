import { Reducer, Action } from 'redux';
import { takeEvery, call, put } from 'redux-saga/effects';
import Axios from 'axios';

import { selectedAnswers, AnswerTags } from '../Constants'

export interface Answer {
  title: string;
  question: string;
  answer: string;
}

export type Answers = { [questionId: string]: Answer };

export interface AnswersState {
  answers: { [keys in AnswerTags]?: Answers };
  isLoading: boolean;
  error?: string;
}

export const initalAnswersState: AnswersState = {
  answers: {},
  isLoading: false,
}

interface SOQuestions {
  items: {
    "accepted_answer_id": number;
    "title": string;
    "body": string;
  }[];
}

interface SOAnswers {
  items: {
    "body": string;
  }[];
}

export const sagaActions = [
  function* watchRequestAnswers() {
    yield takeEvery<RequestQAsAction>('REQUEST_QA', requestQAs)
  }
];

function* requestQAs() {
  try {
    let k: AnswerTags;
    for (k in selectedAnswers) {
      const { data: SOquestions }: { data: SOQuestions } = yield call(Axios.get,
        `https://api.stackexchange.com/2.2/questions/${selectedAnswers[k].questions.join(';')}?site=stackoverflow&filter=withbody`)
      const { data: SOanswers }: { data: SOAnswers } = yield call(Axios.get,
        `https://api.stackexchange.com/2.2/answers/${SOquestions.items.map(i => i.accepted_answer_id).join(';')}?site=stackoverflow&filter=withbody`)
      const answers: Answers = SOquestions.items.reduce<Answers>((p, e, i) => {
        p[e.accepted_answer_id] = {
          title: e.title,
          question: e.body,
          answer: SOanswers.items[i].body,
        }
        return p;
      }, {});
      yield put<ReceiveQAsAction>({ type: 'RECEIVE_QA', tag: k, answers })
    }
  }
  catch (error) {
    yield put<ReceiveQAsAction>({ type: 'RECEIVE_QA', error });
  }
}

export interface RequestQAsAction extends Action { type: 'REQUEST_QA' }
interface ReceiveQAsAction extends Action { type: 'RECEIVE_QA'; error?: string, answers?: Answers, tag?: AnswerTags }

type KnownActions = RequestQAsAction | ReceiveQAsAction;

export const reducer: Reducer<AnswersState, KnownActions> = (state = initalAnswersState, action) => {
  switch (action.type) {
    case 'REQUEST_QA':
      return {
        ...state,
        isLoading: true,
        answers: {},
        error: undefined,
      }
    case 'RECEIVE_QA':
      return {
        ...state,
        isLoading: false,
        answers: action.tag && action.answers ? {
          ...state.answers,
          [action.tag]: {
            ...state.answers[action.tag],
            ...action.answers,
          }
        } : state.answers,
        error: action.error,
      }
    default:
      return state;
  }
}
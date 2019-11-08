import 'jest';
import { call, put } from 'redux-saga/effects'
import Axios from 'axios'

import * as Answers from '../Answers';
import { selectedAnswers } from '../../Constants';

const { AnswerTags } = jest.requireActual('../../Constants');

test('Answers.reducer inital test', () => {
  expect(Answers.reducer(undefined, { type: 'init' } as any)).toEqual(Answers.initalAnswersState);
});

test('Answers.reducer REQUEST_QA action', () => {
  expect(Answers.reducer({ ...Answers.initalAnswersState, error: 'error', isLoading: false }, { type: 'REQUEST_QA' }))
    .toEqual({ ...Answers.initalAnswersState, error: undefined, isLoading: true });
});

test('Answers.reducer RECEIVE_QA action', () => {
  expect(Answers.reducer({ ...Answers.initalAnswersState, error: 'error', isLoading: true, },
    {
      type: 'RECEIVE_QA',
      answers: {
        '123': {
          answer: 'answer1',
          question: 'question1',
          title: 'title1',
        }
      },
      tag: AnswerTags.typescript,
      error: undefined,
    }))
    .toEqual({
      ...Answers.initalAnswersState,
      answers: {
        [AnswerTags.typescript]: {
          '123': {
            answer: 'answer1',
            question: 'question1',
            title: 'title1',
          },
        },
      },
      error: undefined,
      isLoading: false
    });
});

jest.mock('../../Constants', () => ({
  selectedAnswers: {
    typescript: {
      questions: ['123', '345']
    },
    react: {
      questions: ['456']
    },
    redux: {
      questions: [],
    }
  }
}));

test('requestQA saga test', () => {

  const gen = Answers.requestQAs();
  expect(gen.next().value).toStrictEqual(call(Axios.get,
    `https://api.stackexchange.com/2.2/questions/123;345?site=stackoverflow&filter=withbody`));
  expect(gen.next({ data: { items: [{ question_id: 123, "accepted_answer_id": 2345, title: '', body: '' }, { question_id: 345, "accepted_answer_id": 7890, title: '', body: '' }] } }).value).toStrictEqual(call(Axios.get,
    `https://api.stackexchange.com/2.2/answers/2345;7890?site=stackoverflow&filter=withbody`));
  expect(gen.next({ data: { items: [{ body: '' }, { body: '' }] } } as any).value).toStrictEqual(put<Answers.ReceiveQAsAction>({
    type: 'RECEIVE_QA', tag: AnswerTags.typescript, answers: {
      '123': { title: '', question: '', answer: '', },
      '345': { title: '', question: '', answer: '', }
    }
  }))
  expect(gen.next().value).toStrictEqual(call(Axios.get,
    `https://api.stackexchange.com/2.2/questions/456?site=stackoverflow&filter=withbody`));
  expect(gen.next({ data: { items: [{ question_id: 456, "accepted_answer_id": 111, title: '', body: '' }, { question_id: 334, "accepted_answer_id": 222, title: '', body: '' }] } }).value).toStrictEqual(call(Axios.get,
    `https://api.stackexchange.com/2.2/answers/111;222?site=stackoverflow&filter=withbody`));
  expect(gen.next({ data: { items: [{ body: '' }, { body: '' }] } } as any).value).toStrictEqual(put<Answers.ReceiveQAsAction>({
    type: 'RECEIVE_QA', tag: AnswerTags.react, answers: {
      '456': { title: '', question: '', answer: '', },
      '334': { title: '', question: '', answer: '', },
    }
  }));
  expect(gen.next().value).toStrictEqual(call(Axios.get,
    `https://api.stackexchange.com/2.2/questions/?site=stackoverflow&filter=withbody`));
  expect(gen.next({ data: { items: [] } }).value).toStrictEqual(call(Axios.get,
    `https://api.stackexchange.com/2.2/answers/?site=stackoverflow&filter=withbody`));
  expect(gen.next({ data: { items: [] } } as any).value).toStrictEqual(put<Answers.ReceiveQAsAction>({
    type: 'RECEIVE_QA', tag: AnswerTags.redux, answers: {
    }
  }));
  expect(gen.next().done).toBe(true);
})
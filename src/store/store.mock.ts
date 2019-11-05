import { action } from '@storybook/addon-actions';

import { Store, Unsubscribe, Observable } from 'redux';

import { initalAnswersState } from './Answers';

import { ApplicationState } from '../store/index';


export type Level2Partial<T> = {
	[P in keyof T]?: Partial<T[P]>
}

export function storeFactory(state: Level2Partial<ApplicationState>): Store<ApplicationState> {
	let resState: ApplicationState = {
		answers: initalAnswersState,
	}

	if (state.answers)
		resState.answers = { ...resState.answers, ...state.answers };
	
	return {
		getState: () => resState,
		subscribe: (listerner: () => void): Unsubscribe => (() => { }),
		dispatch: (a) => {
			action('Action dispatched. Type: ' + a.type);
			console.log('Action dispatched. Type: ' + a.type);
			console.log(a)
			return a;
		},
		replaceReducer: () => { },
		[Symbol.observable]: () => ({
			subscribe: (observer) => ({ unsubscribe: () => {} }),
			[Symbol.observable]: () => ({} as Observable<ApplicationState>),
		})	}
};
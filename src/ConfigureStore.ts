import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { ApplicationState, reducers, rootSaga } from './store';

export default function configureStore() {
	// Build middleware. These are functions that can process the actions before they reach the store.
	//const windowIfDefined = typeof window === 'undefined' ? null : window as any;
	// If devTools is installed, connect to it
	//const devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__ as () => GenericStoreEnhancer;
  //let enhst = devToolsExtension ? devToolsExtension() : <S>(next: StoreEnhancerStoreCreator<S>) => next;

  const sagaMiddleware = createSagaMiddleware();
	let mw = applyMiddleware(sagaMiddleware);
	
	// Combine all reducers and instantiate the app-wide store instance
	const allReducers = buildRootReducer(reducers);

	let store = createStore(allReducers, mw); //compose(mw, enhst));
	sagaMiddleware.run(rootSaga);

	return store;
}

function buildRootReducer(allReducers: any) {
	return combineReducers<ApplicationState>({ ...allReducers/*, routing: routerReducer*/ });
}
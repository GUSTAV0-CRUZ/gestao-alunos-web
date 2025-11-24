import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import persistReducers from './modules/reduxPersist';
import combineReducers from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistReducers(combineReducers), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persist = persistStore(store);
export default store;

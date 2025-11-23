import { createStore } from 'redux';

import combineReducers from './modules/reducerRouter';

const store = createStore(combineReducers);

export default store;

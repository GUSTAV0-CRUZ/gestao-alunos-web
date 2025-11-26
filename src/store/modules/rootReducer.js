import { combineReducers } from 'redux';

import { reducer } from './example/reducer';
import { authReducer } from './auth/reducer';

export default combineReducers({
  example: reducer,
  auth: authReducer,
});

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducer) => {
  const persistReducers = persistReducer({
    key: 'Base-React',
    storage,
    whitelist: ['auth'],
  }, reducer);
  return persistReducers;
};

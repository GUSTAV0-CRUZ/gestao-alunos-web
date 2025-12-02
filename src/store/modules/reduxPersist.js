import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducer) => {
  const persistReducers = persistReducer({
    key: 'react-com-api-alunos',
    storage,
    whitelist: ['auth'],
  }, reducer);
  return persistReducers;
};

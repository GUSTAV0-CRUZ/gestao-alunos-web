import * as reduxSaga from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

async function putLogin(state) {
  // console.log('putLogin()');
  const { email, password } = state.dataUser;
  const token = await axios.post('/token/', { email, password });
  return token.data;
}

function* requestLogin() {
  // console.log('requestLogin()');
  try {
    const stateAuth = yield reduxSaga.select((state) => state.auth);
    const response = yield reduxSaga.call(() => putLogin(stateAuth));
    yield reduxSaga.put(actions.loginSuccess(response));
  } catch (error) {
    toast.error('Usuário ou senha inválido');
    yield reduxSaga.put(actions.loginFAILED());
  }
}

function* saveToken() {
  try {
    // console.log('saveToken()');
    const { token, prevpath } = yield reduxSaga.select((state) => state.auth);
    yield axios.defaults.headers.common.authorization = `Bearer ${token}`;
    toast.success('Login realizado com sucesso');
    if (prevpath !== '') return history.push(prevpath);
    return history.push('/');
  } catch (e) {
    return toast.error('Token não encontrado');
  }
}

export default reduxSaga.all([
  reduxSaga.takeLatest(types.LOGIN_REQUEST, requestLogin),
  reduxSaga.takeLatest(types.LOGIN_SUCCESS, saveToken),
  reduxSaga.takeLatest(types.LOGIN_FAILED, saveToken),
]);

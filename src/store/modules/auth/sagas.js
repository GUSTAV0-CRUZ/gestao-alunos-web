import * as reduxSaga from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

async function putLogin(state) {
  const { email, password } = state.dadosUser;
  const token = await axios.post('/token/', { email, password });
  return token.data;
}

function* loginRequest() {
  try {
    const stateAuth = yield reduxSaga.select((state) => state.auth);
    const response = yield reduxSaga.call(() => putLogin(stateAuth));
    yield reduxSaga.put(actions.loginSuccess(response));
    toast.success('Login realizado com sucesso');
    history.push('/');
  } catch (error) {
    // eslint-disable-next-line array-callback-return
    error.response.data.errors.map((err) => {
      toast.error(err);
    });
    yield reduxSaga.put(actions.loginFAILED());
  }
}

export default reduxSaga.all([
  reduxSaga.takeLatest(types.LOGIN_REQUEST, loginRequest),
]);

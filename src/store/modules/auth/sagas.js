import * as reduxSaga from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

async function makesRequests(state) {
  // console.log('makesRequests()');
  try {
    const {
      id, nome, email, password,
    } = state.dataUser;

    if (id) {
      const updateData = await axios.put('user', {
        id, nome, email, ...(password !== '' ? { password } : false),
      });
      return updateData;
    }

    const token = await axios.post('/token/', { email, password });
    return token.data;
  } catch (e) {
    throw new Error(e);
  }
}

function* requestLogin() {
  // console.log('requestLogin()');
  try {
    const stateAuth = yield reduxSaga.select((state) => state.auth);
    const response = yield reduxSaga.call(() => makesRequests(stateAuth));
    yield reduxSaga.put(actions.loginSuccess(response));
    toast.success('Login realizado com sucesso');
  } catch (error) {
    toast.error('Usuário ou senha inválido');
    yield reduxSaga.put(actions.loginFailed());
  }
}

function* requestUpdate() {
  try {
    const stateAuthUpdate = yield reduxSaga.select((state) => state.auth);
    yield reduxSaga.call(() => makesRequests(stateAuthUpdate));
    if (stateAuthUpdate.changeEmail) {
      toast.success('Editado com sucesso, faça login com o novo email');
      return yield reduxSaga.put(actions.loginFailed());
    }
    toast.success('Editado com sucesso');
    return 0;
  } catch (error) {
    toast.error('Erro ao tentar realizar alterações');
    yield reduxSaga.put(actions.userUpdateFailed());
    return 0;
  }
}

function* saveToken(atualiza) {
  try {
    // console.log('saveToken()');
    const { token, prevpath } = yield reduxSaga.select((state) => state.auth);
    yield axios.defaults.headers.common.authorization = `Bearer ${token}`;
    if (atualiza.atualiza) return 0;
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
  reduxSaga.takeLatest(types.USER_UPDATE_REQUEST, requestUpdate),
  reduxSaga.takeLatest(types.USER_UPDATE_FAILED, saveToken),
  reduxSaga.takeLatest(types.ATUALIZA_TOKEN_AXIOS, () => saveToken({ atualiza: true })),
]);

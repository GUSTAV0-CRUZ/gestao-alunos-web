import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}
export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}
export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function userUpdateRequest(payload) {
  return {
    type: types.USER_UPDATE_REQUEST,
    payload,
  };
}

export function userUpdateFailed() {
  return {
    type: types.USER_UPDATE_FAILED,
  };
}

export function atualizaTokenAxios() {
  return {
    type: types.ATUALIZA_TOKEN_AXIOS,
  };
}

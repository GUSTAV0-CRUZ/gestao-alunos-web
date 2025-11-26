import * as types from '../types';

const innitialState = {
  isLogin: false,
  dadosUser: {},
  token: '',
};

// eslint-disable-next-line default-param-last
export function authReducer(state = innitialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      if (!action.payload.user) return state;
      innitialState.isLogin = true;
      innitialState.dadosUser = action.payload.user;
      innitialState.token = action.payload.jsonWebToken;
      // console.log(innitialState);
      return innitialState;
    }
    case types.LOGIN_FAILED: {
      const resetaState = {
        isLogin: false,
        dadosUser: {},
        token: '',
      };
      return resetaState;
    }
    case types.LOGIN_REQUEST: {
      innitialState.dadosUser = action.payload;
      return innitialState;
    }
    default:
      return state;
  }
}

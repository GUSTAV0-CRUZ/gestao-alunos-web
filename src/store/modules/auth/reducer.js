import * as types from '../types';

const innitialState = {
  isLoggedIn: false,
  dataUser: {},
  token: '',
  prevpath: '',
};

// eslint-disable-next-line default-param-last
export function authReducer(state = innitialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      if (!action.payload.user) return state;
      const newState = {
        isLoggedIn: true,
        dataUser: action.payload.user,
        token: action.payload.jsonWebToken,
        prevpath: innitialState.prevpath,
      };
      // console.log('success: ', newState);
      return newState;
    }
    case types.LOGIN_FAILED: {
      // console.log(innitialState);
      const resetaState = {
        isLoggedIn: false,
        dataUser: {},
        token: '',
      };
      return resetaState;
    }
    case types.LOGIN_REQUEST: {
      innitialState.prevpath = '';
      if (action.payload.props.location.state) {
        innitialState.prevpath = action.payload.props.location.state.prevpath;
      }
      const { email, password } = action.payload;
      const newState = {
        ...state,
        dataUser: { email, password },
      };
      // console.log('request: ', newState);
      return newState;
    }
    default:
      return state;
  }
}

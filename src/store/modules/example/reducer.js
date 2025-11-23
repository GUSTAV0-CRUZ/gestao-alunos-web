import * as types from '../types';

const innitialState = {
  example: false,
};

// eslint-disable-next-line default-param-last
export function reducer(state = innitialState, action) {
  switch (action.type) {
    case types.EXAMPLE_SUCCESS: {
      const newState = { ...state };
      newState.example = !newState.example;
      console.log('Success');
      return newState;
    }
    case types.EXAMPLE_FAILED: {
      console.log('Failed');
      return state;
    }
    case types.EXAMPLE_REQUEST: {
      console.log('Começar Requesição');
      return state;
    }
    default:
      return state;
  }
}

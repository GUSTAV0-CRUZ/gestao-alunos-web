import { exampleType } from '../types';

const innitialState = {
  example: false,
};

// eslint-disable-next-line default-param-last
export function reducer(state = innitialState, action) {
  switch (action.type) {
    case exampleType: {
      const newState = { ...state };
      newState.example = !newState.example;
      return newState;
    }
    default:
      return state;
  }
}

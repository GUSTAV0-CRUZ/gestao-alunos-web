import { createStore } from 'redux';

const innitialState = {
  teste: false,
};

// eslint-disable-next-line default-param-last
function reducer(state = innitialState, action) {
  switch (action.type) {
    case 'teste': {
      const newState = { ...state };
      newState.teste = !newState.teste;
      return newState;
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

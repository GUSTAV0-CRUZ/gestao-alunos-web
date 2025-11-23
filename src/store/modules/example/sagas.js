import * as reduxSaga from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

function simulaAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Realizando requesição');
      resolve();
      reject();
    }, 2000);
  });
}

function* simulaRequest() {
  try {
    yield reduxSaga.call(simulaAPI);
    yield reduxSaga.put(actions.clicaBotaoSuccess());
  } catch (e) {
    yield reduxSaga.put(actions.clicaBotaoFAILED());
  }
}

export default reduxSaga.all([
  reduxSaga.takeLatest(types.EXAMPLE_REQUEST, simulaRequest),
]);

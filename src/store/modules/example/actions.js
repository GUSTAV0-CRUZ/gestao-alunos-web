import * as types from '../types';

export function clicaBotaoRequest() {
  return {
    type: types.EXAMPLE_REQUEST,
  };
}
export function clicaBotaoSuccess() {
  return {
    type: types.EXAMPLE_SUCCESS,
  };
}
export function clicaBotaoFAILED() {
  return {
    type: types.EXAMPLE_FAILED,
  };
}

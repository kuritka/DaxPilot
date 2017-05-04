import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function isinReducer(state = initialState.isins, action) {
  switch (action.type) {
    case types.LOAD_ISINS_SUCCESS:
      return action.isins;
    default:
      return state;
  }
}

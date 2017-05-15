import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function isinReducer(state = initialState.isinObject, action) {
  switch (action.type) {
    case types.LOAD_ISINS_SUCCESS:
      return action.isinObject;
    default:
      return state;
  }
}

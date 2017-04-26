import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function tradesReducer(state = initialState.trades, action) {
  switch (action.type) {
    case types.LOAD_TRADES_SUCCESS:
      return action.trades;
    default:
      return state;
  }
}

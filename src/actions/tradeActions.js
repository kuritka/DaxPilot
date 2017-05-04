import * as types from './actionTypes';
import tradesApi from '../api/mockTradesApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadTradesSuccess(trades) {
  return { type: types.LOAD_TRADES_SUCCESS, trades};
}



//ASYNC part
export function loadTradesAsync() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return tradesApi.getAllTrades().then(trades => {
      dispatch(loadTradesSuccess(trades));
    }).catch(error => {
      throw(error);
    });
  };
}


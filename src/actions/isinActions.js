import * as types from './actionTypes';
import isinApi from '../api/mockISINApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadISINSuccess(trades) {
  return { type: types.LOAD_ISINS_SUCCESS, trades};
}



//ASYNC part
export function loadISINsAsync() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return isinApi.getAllTrades().then(courses => {
      dispatch(loadISINSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

import * as types from './actionTypes';
import isinApi from '../api/mockISINApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import axios from 'axios';


export function loadISINSuccess(trades) {
  return { type: types.LOAD_ISINS_SUCCESS, trades};
}



//ASYNC part
export function loadISINsAsync(startWith) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return isinApi.getAllWhereISINStartsWith(startWith).then(isins => {
      dispatch(loadISINSuccess(isins));
    }).catch(error => {
      throw(error);
    });
  };
}


// export function searchISINs(startWith) {
//   return axios.get('')
// }
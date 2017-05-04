import * as types from './actionTypes';
import tradesApi from '../api/mockTradesApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import store from './../store';
import axios from 'axios';

export function loadTradesSuccess(trades) {
  return { type: types.LOAD_TRADES_SUCCESS, trades};
}

//ASYNC part
export function getAllTradesAsync() {  
      axios.get('http://localhost:3004/trades')
        .then(response => { 
             store.dispatch(loadTradesSuccess(response.data));
        }).catch(error => { throw(error);});
 }




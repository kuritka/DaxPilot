import * as types from './actionTypes';
import tradesApi from '../api/mockTradesApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import store from './../store';
import axios from 'axios';

export function loadTradesSuccess(trades) {
  return { type: types.LOAD_TRADES_SUCCESS, trades};
}


export function getTradesAsync(isin, from, to, callback) {  
      //axios.get('http://localhost:3004/trades?isin='+isin)
      axios.get('http://35.158.86.73:3000/v0.3/trades/'+isin+'?dateTimeFrom='+from+' 00:00:00&dateTimeTo='+to+' 23:59:00&samples=25')
        .then(response => { 
             store.dispatch(loadTradesSuccess(response.data.trades));
             if(callback) callback();
        }).catch(error => { throw(error);});
 }

 








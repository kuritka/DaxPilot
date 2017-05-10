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
      store.dispatch(beginAjaxCall());
      axios.get('http://localhost:3004/trades')
        .then(response => {             
             store.dispatch(loadTradesSuccess(response.data));
        }).catch(error => { throw(error);});
 }



export function getTradesAsync(isin, callback) {  
      //axios.get('http://localhost:3004/trades?isin='+isin)
      axios.get('http://35.158.86.73:3000/v0.2/trades/'+isin+'?dateTimeFrom=2016-01-01&dateTimeTo=2016-05-05&samples=25')
        .then(response => { 
             store.dispatch(loadTradesSuccess(response.data.trades));
             if(callback) callback();
        }).catch(error => { throw(error);});
 }




 export function getTradesRangeAsync(isin, from, to, callback) {  
      //axios.get('http://localhost:3004/trades?isin='+isin)
      axios.get('http://35.158.86.73:3000/v0.2/trades/'+isin+'?dateTimeFrom=2016-01-01&dateTimeTo=2016-05-05')
        .then(response => { 
             store.dispatch(loadTradesSuccess(response.data.trades));
             if(callback) callback();
        }).catch(error => { throw(error);});
 }



 








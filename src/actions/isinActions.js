import * as types from './actionTypes';
import axios from 'axios';
import store from './../store';
import _ from 'lodash';

let address = 'http://35.158.86.73:3000/v0.2/isins';
//let address = 'http://localhost:3004/isins' ;

export function loadISINSuccess(isins) {
  return { type: types.LOAD_ISINS_SUCCESS, isins};
}


export function getAllISINSuccess(isins) {
  return { type: types.GET_ALL_ISINS_SUCCESS, isins};
}

export function searchISINs(startWith) {
    if(startWith && startWith.length > 2  ){
      axios.get(address)
        .then(response => { 
          let filteredData = response.data.isins.filter(function (item) {
               return 0 === item.isin.toUpperCase().indexOf(startWith.toUpperCase());
          });
          store.dispatch(loadISINSuccess(filteredData));
        });
    }
    else
    {
      store.dispatch(loadISINSuccess([]));
    }
}




export function getAllISINs() {
      axios.get('http://localhost:3004/isins')
        .then(response => { 
          store.dispatch(getAllISINSuccess(response.isins));
        });
    }
    
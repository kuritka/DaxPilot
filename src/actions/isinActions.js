import * as types from './actionTypes';
import axios from 'axios';
import store from './../store';
import _ from 'lodash';


export function loadISINSuccess(isins) {
  return { type: types.LOAD_ISINS_SUCCESS, isins};
}


export function getAllISINSuccess(isins) {
  return { type: types.GET_ALL_ISINS_SUCCESS, isins};
}

export function searchISINs(startWith) {
    if(startWith && startWith.length > 2  ){
      axios.get('http://localhost:3004/isins?q='+startWith)
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
    
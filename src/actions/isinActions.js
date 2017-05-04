import * as types from './actionTypes';
import axios from 'axios';
import store from './../store';


export function loadISINSuccess(isins) {
  return { type: types.LOAD_ISINS_SUCCESS, isins};
}

export function searchISINs(startWith) {
    if(startWith && startWith.length > 2  ){
      axios.get('http://localhost:3004/isins?q='+startWith)
        .then(response => { 
          store.dispatch(loadISINSuccess(response.data));
        });
    }
    else
    {
      store.dispatch(loadISINSuccess([]));
    }
}
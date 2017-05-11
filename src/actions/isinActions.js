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


// test this:
export function RemoveCharactersFromIsin(isin, startWith){
      if(isin && isin.length > startWith.length){
        let s = isin.substr(2);
        let x = startWith.substr(2);        
        let b = isin.substr(0,2);
        while(s.charAt(0) === '0')
        {
          s = s.substr(1);
        }        
        while(x.charAt(0) === '0')
        {
          x = x.substr(1);
        }
        let str = startWith.slice(0, -x.length);        
        return b + (str + s).substr(2);
      }
      return isin;
}


export function searchISINs(startWith) {
    if(startWith && startWith.length > 2  ){
      axios.get(address)
        .then(response => {           
          startWith = startWith.toUpperCase();
          let filteredData = response.data.isins.filter(function (item) {
               return (0 === item.isin.toUpperCase().indexOf(startWith)) 
               || (0 === RemoveCharactersFromIsin(item.isin,startWith).toUpperCase().indexOf(startWith));
          });
          let filteredDataSorted = _.sortBy(filteredData, [{"isin":"asc"}]);
          store.dispatch(loadISINSuccess(filteredDataSorted));
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
    
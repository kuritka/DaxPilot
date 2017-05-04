import delay from './delay';
import * as common  from './common';
import _ from 'lodash';

const isins = [
  {
    id: 'DE5534567890',
    product: 'DAX'
  },
  {
    id: 'DE5134567890',
    product: 'DAX'
  },
  {
    id: 'DE1234567890',
    product: 'DAX'
  },
  {
    id: 'DE1234567890',
    product: 'DAX'
  },
  {
    id: 'DE1234567890',
    product: 'DAX'
  },
  {
    id: 'DE1234567890',
    product: 'DAX'
  },
  {
    id: 'DE1234567890',
    product: 'DAX'
  },
  {
    id: 'DE1234567890',
    product: 'DAX'
  },
   {
    id: 'DE1234567890',
    product: 'DAX'
  },
  {
    id: 'DE1234567890',
    product: 'DAX'
  }
];

const generateId = (isin) => {
  return isin.id.toLowerCase();
};

class ISINApi {
  static getAllIsins() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], isins));
      }, delay);
    });
  }


  static getAllWhereISINStartsWith(startClause) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let  filteredIsins = _.filter(isins, function (isin) {
            return _.some(isin.id, function (id) {
              return _.startsWith(id, startClause);
            });
        });
        resolve(Object.assign([], filteredIsins));
      }, delay);
    });
  }
}


export default ISINApi;

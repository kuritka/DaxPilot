import delay from './delay';
import * as common  from './common';

const isins = [
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
  static getAllTrades() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], isins));
      }, delay);
    });
  }
}


export default ISINApi;

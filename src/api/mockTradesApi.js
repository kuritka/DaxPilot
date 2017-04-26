import delay from './delay';
import * as common  from './common';

const trades = [
  {
    id: '1123456',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 12.88,
    datetime: '2012-08-08 11:45:58'
  },
  {
    id: '1123457',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 14.11,
    datetime: '2012-08-09 11:45:58'  
  },
  {
    id: '1123458',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 15,
    datetime: '2012-08-09 13:45:58'
  },
  {
    id: '54234656',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 11,
    datetime: '2012-08-10 13:00:58'
  }
];


const generateId = (trade) => {
  return trade.isin.toLowerCase() + '-' + common.replaceAll(trade.datetime, ' ', '-');
};



class TradesApi {
  static getAllTrades() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], trades));
      }, delay);
    });
  }
}


export default TradesApi;

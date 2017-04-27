import delay from './delay';
import * as common  from './common';

const trades = [
  {
    id: '1123456',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 12,
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
    price: 18,
    datetime: '2012-08-09 13:45:58'
  },
  {
    id: '5423465',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 10,
    datetime: '2012-08-10 13:00:58'
  },
  {
    id: '54454656',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 8.11,
    datetime: '2012-08-10 13:12:58'
  },
   {
    id: '2142346',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 10.5,
    datetime: '2012-08-11 16:21:00'
  },
  {
    id: '21421656',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 14,
    datetime: '2012-08-11 17:18:00'
  },
  {
    id: '214212346',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 14.17,
    datetime: '2012-08-12 17:22:00'
  },
   {
    id: '2888346',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 14.17,
    datetime: '2012-08-13 17:24:00'
  },
  {
    id: '2148346',
    isin: 'DE1234567890',
    product: 'DAX',
    price: 17.21,
    datetime: '2012-08-13 19:24:00'
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

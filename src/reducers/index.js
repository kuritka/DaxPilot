import {combineReducers} from 'redux';
import isinObject from './isinReducer';
import trades from './tradesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  isinObject,
  trades,
  ajaxCallsInProgress
});

export default rootReducer;

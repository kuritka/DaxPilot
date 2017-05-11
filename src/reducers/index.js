import {combineReducers} from 'redux';
import isins from './isinReducer';
import trades from './tradesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  isins,
  trades,
  ajaxCallsInProgress
});

export default rootReducer;

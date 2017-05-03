import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import isins from './isinReducer';
import trades from './tradesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  isins,
  trades,
  ajaxCallsInProgress
});

export default rootReducer;

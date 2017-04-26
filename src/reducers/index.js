import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import trades from './tradesReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  trades,
  ajaxCallsInProgress
});

export default rootReducer;

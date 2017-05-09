import {createStore}  from 'redux';
import reducers from './reducers';
import {getAllISINs} from './actions/isinActions';

const store = createStore(reducers);

const globalISINs = getAllISINs();

export default store;
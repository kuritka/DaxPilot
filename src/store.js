import {createStore}  from 'redux';
import reducers from './reducers';
import {getAllISINs} from './actions/isinActions';

const store = createStore(reducers);

export default store;
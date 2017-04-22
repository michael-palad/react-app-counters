import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';

const allReducers = combineReducers({
  counters: counterReducer
});

export default allReducers;

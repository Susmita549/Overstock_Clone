
import { combineReducers, legacy_createStore } from 'redux';
import reducer from './reducer';
import addItems from './prodReducer';

const rootReducers = combineReducers({
    addItems:addItems,
    users:reducer
})

export const store=legacy_createStore(rootReducers)
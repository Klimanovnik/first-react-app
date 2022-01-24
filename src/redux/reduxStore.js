import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
});

const reduxStore = createStore(reducers);

export default reduxStore;
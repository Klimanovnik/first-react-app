import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const reduxStore = createStore(reducers);

//window.store = reduxStore;

export default reduxStore;
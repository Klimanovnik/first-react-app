import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

const reduxStore = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = reduxStore;

export default reduxStore;
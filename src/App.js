import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import UserContainer from "./components/Users/User/UserContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="container">
                    <Header/>
                    <div className="core-content">
                        <Navigation/>
                        <div className="main-content">
                            <Route
                                path="/profile"
                                render={
                                    () => {
                                        return <Profile
                                            profile={props.store.getState().profile}
                                            dispatch={props.store.dispatch.bind(props.store)}
                                        />;
                                    }
                                }
                            />
                            <Route
                                path="/dialogs"
                                render={
                                    () => {
                                        return <DialogsContainer
                                            dialogs={props.store.getState().dialogs}
                                            dispatch={props.store.dispatch.bind(props.store)}
                                        />;
                                    }
                                }
                            />
                            <Route
                                exact
                                path="/users"
                                render={
                                    () => {
                                        return <UsersContainer/>;
                                    }
                                }
                            />
                            <Route
                                exact
                                path="/users/:userId"
                                render={
                                    () => {
                                        return <UserContainer />;
                                    }
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

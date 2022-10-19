import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";
import UserContainer from "./components/Users/User/UserContainer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeAppThunkCreator} from "./redux/appReducer";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunkCreator();
    }

    render() {
        return (
            <>
                {
                    this.props.isInitialized
                        ? (
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
                                                                profile={this.props.store.getState().profile}
                                                                dispatch={this.props.store.dispatch.bind(this.props.store)}
                                                            />;
                                                        }
                                                    }
                                                />
                                                <Route
                                                    path="/dialogs"
                                                    render={
                                                        () => {
                                                            return <DialogsContainer
                                                                dialogs={this.props.store.getState().dialogs}
                                                                dispatch={this.props.store.dispatch.bind(this.props.store)}
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
                                                            return <UserContainer/>;
                                                        }
                                                    }
                                                />
                                                <Route
                                                    exact
                                                    path="/login"
                                                    render={
                                                        () => {
                                                            return <Login/>;
                                                        }
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BrowserRouter>
                        )
                        : (
                            <div style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Preloader size="200px" thickness="10px" />
                            </div>
                        )
                }
            </>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        isInitialized: state.app.isInitialized
    };
};

const mapDispatchToProps = {
    initializeAppThunkCreator
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App);

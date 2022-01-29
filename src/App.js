import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="container">
                    <Header />
                    <div className="core-content">
                        <Navigation />
                        <div className="main-content">
                            <Routes>
                                <Route
                                    path="/profile/*"
                                    element={
                                        <Profile
                                            profile={props.store.getState().profile}
                                            dispatch={props.store.dispatch.bind(props.store)}
                                        />
                                    }
                                />
                                <Route
                                    path="/dialogs/*"
                                    element={
                                        <DialogsContainer
                                            dialogs={props.store.getState().dialogs}
                                            dispatch={props.store.dispatch.bind(props.store)}
                                        />
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

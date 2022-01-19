import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

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
                                        <Dialogs
                                            dialogs={props.store.getState().dialogs}
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

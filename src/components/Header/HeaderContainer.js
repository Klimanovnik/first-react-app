import React from "react";
import Header from "./Header";
import {connect} from 'react-redux';
import {checkAuthThunkCreator, logoutThunkCreator} from "../../redux/authReducer";

const mapStateToProps = function (state) {
    return {
        isAuth: state.auth.isAuth,
        authData: state.auth.authData
    };
};

const mapDispatchToProps = {
    checkAuthThunkCreator,
    logoutThunkCreator
};

class HeaderServerAPI extends React.Component {
    componentDidMount() {
        this.props.checkAuthThunkCreator();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderServerAPI);

export default HeaderContainer;
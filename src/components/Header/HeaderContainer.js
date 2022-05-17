import React from "react";
import axios from "axios";
import Header from "./Header";
import {connect} from 'react-redux';
import {setAuthData} from "../../redux/authReducer";

const mapStateToProps = function (state) {
    return {
        isAuth: state.auth.isAuth,
        authData: state.auth.authData
    };
};

const mapDispatchToProps = {
    setAuthData
};

class HeaderServerAPI extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthData(response.data.data);
                }
            });
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderServerAPI);

export default HeaderContainer;
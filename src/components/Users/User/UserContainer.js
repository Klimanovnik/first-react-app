import React from "react";
import axios from "axios";
import User from "./User";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {setUser} from "../../../redux/usersReducer";

const mapStateToProps = function (state) {
    return {
        user: state.usersPage.user
    };
};

const mapDispatchToProps = {
    setUser
};

class UserServerAPI extends React.Component {
    componentDidMount() {
        const userIdForRequest = +this.props.match.params.userId;

        if (userIdForRequest !== this.props.user?.userId) {
            this.props.setUser(null);

            axios
                .get(`https://social-network.samuraijs.com/api/1.0/profile/${userIdForRequest}`)
                .then(response => {
                    //console.log("New Request");
                    this.props.setUser(response.data);
                });
        }
    }

    render() {
        return (
            <User
                {...this.props}
            />
        );
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(UserServerAPI));

export default UserContainer;
import React from "react";
import User from "./User";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {getUserThunkCreator} from "../../../redux/usersReducer";

const mapStateToProps = function (state) {
    return {
        user: state.usersPage.user
    };
};

const mapDispatchToProps = {
    getUserThunkCreator
};

class UserServerAPI extends React.Component {
    componentDidMount() {
        const userIdForRequest = +this.props.match.params.userId;

        if (userIdForRequest !== this.props.user?.userId) {
            this.props.getUserThunkCreator(userIdForRequest);
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
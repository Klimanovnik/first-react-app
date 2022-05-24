import React from "react";
import axios from "axios";
import Users from "./Users";
import {connect} from 'react-redux';
import {
    setUsersTotalCount,
    setCurrentPage,
    setUsers,
    toggleFollow,
    toggleFetching
} from "../../redux/usersReducer";

const mapStateToProps = function (state) {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination,
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = {
    toggleFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleFetching
};

class UsersServerAPI extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleFetching(true);

            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagination.countPerRequest}&page=${this.props.pagination.currentPage}`,
                    {
                        withCredentials: true
                    }
                )
                .then(response => {
                    //this.props.setUsersTotalCount(response.data.totalCount);
                    this.props.toggleFetching(false);
                    this.props.setUsers(response.data.items);
                });
        }
    }

    onPageChanged = (newPage) => {
        this.props.setCurrentPage(newPage);
        this.props.setUsers([]);
        this.props.toggleFetching(true);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagination.countPerRequest}&page=${newPage}`,
                {
                    withCredentials: true
                }
            )
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users
                {...this.props}
                onPageChanged={this.onPageChanged}
            />
        );
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersServerAPI);

export default UsersContainer;
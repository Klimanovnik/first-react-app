import React from "react";
import axios from "axios";
import Users from "./Users";
import {connect} from 'react-redux';
import {
    setUsersTotalCountAC,
    setCurrentPageAC,
    setUsersAC,
    toggleFollowAC,
    toggleFetchingAC
} from "../../redux/usersReducer";

const mapStateToProps = function (state) {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination,
        isFetching: state.usersPage.isFetching
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        toggleFollow(userID) {
            dispatch(toggleFollowAC(userID));
        },
        setUsers(users) {
            dispatch(setUsersAC(users));
        },
        setCurrentPage(newPage) {
            dispatch(setCurrentPageAC(newPage));
        },
        setUsersTotalCount(usersTotalCount) {
            dispatch(setUsersTotalCountAC(usersTotalCount));
        },
        toggleFetching(isFetching) {
            dispatch(toggleFetchingAC(isFetching));
        }
    };
};

class UsersServerAPI extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleFetching(true);

            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagination.countPerRequest}&page=${this.props.pagination.currentPage}`)
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
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pagination.countPerRequest}&page=${newPage}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users
                pagination={this.props.pagination}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                toggleFollow={this.props.toggleFollow}
                isFetching={this.props.isFetching}
            />
        );
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersServerAPI);

export default UsersContainer;
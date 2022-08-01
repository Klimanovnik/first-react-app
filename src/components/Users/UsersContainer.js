import React from "react";
import Users from "./Users";
import {connect} from 'react-redux';
import {
  setUsersTotalCount,
  setCurrentPage,
  setUsers,
  toggleFollow,
  toggleFetching,
  setUserFollowingInProgress,
  getUsersThunkCreator,
  toggleFollowThunkCreator
} from "../../redux/usersReducer";

const mapStateToProps = function (state) {
  return {
    users: state.usersPage.users,
    pagination: state.usersPage.pagination,
    isFetching: state.usersPage.isFetching,
    isAuth: state.auth.isAuth,
    disabledButtons: state.usersPage.disabledButtons
  };
};

const mapDispatchToProps = {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleFetching,
  setUserFollowingInProgress,
  getUsersThunkCreator,
  toggleFollowThunkCreator
};

class UsersServerAPI extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsersThunkCreator(this.props.pagination.countPerRequest, this.props.pagination.currentPage);
    }
  }

  onPageChanged = (newPage) => {
    this.props.setCurrentPage(newPage);
    this.props.setUsers([]);

    this.props.getUsersThunkCreator(this.props.pagination.countPerRequest, newPage);
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
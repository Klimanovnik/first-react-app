import React from "react";
import Users from "./Users";
import {connect} from 'react-redux';
import {
  setUsersTotalCount,
  setCurrentPage,
  setUsers,
  toggleFollow,
  toggleFetching,
  setUserFollowingInProgress
} from "../../redux/usersReducer";
import {usersAPI} from "../../api/api";

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
  setUserFollowingInProgress
};

class UsersServerAPI extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.toggleFetching(true);

      usersAPI.getUsers(this.props.pagination.countPerRequest, this.props.pagination.currentPage).then(data => {
        //this.props.setUsersTotalCount(response.data.totalCount);
        this.props.toggleFetching(false);
        this.props.setUsers(data.items);
      });
    }
  }

  onPageChanged = (newPage) => {
    this.props.setCurrentPage(newPage);
    this.props.setUsers([]);
    this.props.toggleFetching(true);

    usersAPI.getUsers(this.props.pagination.countPerRequest, newPage).then(data => {
      this.props.toggleFetching(false);
      this.props.setUsers(data.items);
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
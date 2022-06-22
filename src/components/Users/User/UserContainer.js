import React from "react";
import User from "./User";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {setUser} from "../../../redux/usersReducer";
import {usersAPI} from "../../../api/api";

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

      usersAPI.getUser(userIdForRequest).then(data => {
        this.props.setUser(data);
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
import Users from "./Users";
import {connect} from 'react-redux';
import {setUsersAC, toggleFollowAC} from "../../redux/usersReducer";

const mapStateToProps = function (state) {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        toggleFollow(userID) {
            dispatch(toggleFollowAC(userID));
        },
        setUsers(users) {
            dispatch(setUsersAC(users));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
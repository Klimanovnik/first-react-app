import Users from "./Users";
import {connect} from 'react-redux';
import {setUsersTotalCountAC, setCurrentPageAC, setUsersAC, toggleFollowAC} from "../../redux/usersReducer";

const mapStateToProps = function (state) {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination
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
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
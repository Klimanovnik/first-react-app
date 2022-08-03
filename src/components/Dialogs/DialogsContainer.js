import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = function (state) {
    return {
        dialogs: state.dialogs
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        addNewMessage() {
            dispatch({
                type: "ADD-NEW-MESSAGE"
            });
        },
        changeNewMessage(newValue) {
            dispatch({
                type: "CHANGE-NEW-MESSAGE-TEXT",
                newMessageText: newValue
            });
        }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
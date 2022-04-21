import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
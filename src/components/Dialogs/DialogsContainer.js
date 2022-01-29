import Dialogs from "./Dialogs";

function DialogsContainer(props) {

    const changeNewMessage = function (newValue) {
        props.dispatch({
            type: "CHANGE-NEW-MESSAGE-TEXT",
            newMessageText: newValue
        });
    };

    const addNewMessage = function () {
        props.dispatch({
            type: "ADD-NEW-MESSAGE"
        });
    };

    return (
        <Dialogs
            changeNewMessage={changeNewMessage}
            addNewMessage={addNewMessage}
            dialogs={props.dialogs}
        />
    );
};

export default DialogsContainer;
const dialogsReducer = function (state, action) {

    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const messages = state.messages;
            messages.push({
                id: messages.length,
                text: state.newMessageText
            });
            state.newMessageText = "";
            break;
        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessageText;
            break;
    }
};

export default dialogsReducer;
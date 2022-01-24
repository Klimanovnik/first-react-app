const initialState = {
    recipients: [
        { id: 0, name: "Dima" },
        { id: 1, name: "Mike" },
        { id: 2, name: "Fedor" },
        { id: 3, name: "Slava" }
    ],
    messages: [
        { id: 0, text: "Hello" },
        { id: 1, text: "Yo" },
        { id: 2, text: "How are you ?" },
        { id: 3, text: "I'am OK" }
    ],
    newMessageText: "",
};

const dialogsReducer = function (state = initialState, action) {

    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            const messages = state.messages;
            messages.push({
                id: messages.length,
                text: state.newMessageText
            });
            state.newMessageText = "";
            return state;
        case "CHANGE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;
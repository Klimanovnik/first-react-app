const initialState = {
    recipients: [
        {id: 0, name: "Dima"},
        {id: 1, name: "Mike"},
        {id: 2, name: "Fedor"},
        {id: 3, name: "Slava"}
    ],
    messages: [
        {id: 0, text: "Hello"},
        {id: 1, text: "Yo"},
        {id: 2, text: "How are you ?"},
        {id: 3, text: "I'am OK"}
    ]
};

const dialogsReducer = function (state = initialState, action) {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            if (action.message === "") {
                return state;
            }

            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: state.messages.length,
                        text: action.message
                    }
                ]
            };
        default:
            return state;
    }
};

export {dialogsReducer};
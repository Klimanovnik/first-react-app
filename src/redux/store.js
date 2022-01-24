import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const store = {
    _state: {
        profile: {
            myPosts: {
                posts: [
                    {
                        id: 0,
                        text: "Hello"
                    },
                    {
                        id: 1,
                        text: "Qwerty"
                    },
                    {
                        id: 2,
                        text: "Ahahaha"
                    },
                    {
                        id: 3,
                        text: "Ololo"
                    }
                ],
                newPostText: "",
                addPostButtonText: "Add Post",
            },
            description: {
                name: "Nikita",
                other: [
                    {
                        id: 0,
                        label: "Date of Birth",
                        text: "August 26"
                    },
                    {
                        id: 1,
                        label: "City",
                        text: "Zaraysk"
                    },
                    {
                        id: 2,
                        label: "About me",
                        text: "Hello, everyone ! This is my first React application."
                    }
                ]
            }
        },
        dialogs: {
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
        }
    },
    _subscriber() {
        console.log("Subscriber is not defined");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profile, action);
        dialogsReducer(this._state.dialogs, action);

        this._subscriber();
    }
};

export default store;
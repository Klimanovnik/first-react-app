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
                        id: 1,
                        label: "Date of Birth",
                        text: "August 26"
                    },
                    {
                        id: 2,
                        label: "City",
                        text: "Zaraysk"
                    },
                    {
                        id: 3,
                        label: "About me",
                        text: "Hello, everyone ! This is my first React application."
                    }
                ]
            }
        },
        dialogs: {
            recipients: [
                { id: 1, name: "Dima" },
                { id: 2, name: "Mike" },
                { id: 3, name: "Fedor" },
                { id: 4, name: "Slava" }
            ],
            messages: [
                { id: 1, text: "Hello" },
                { id: 2, text: "Yo" },
                { id: 3, text: "How are you ?" },
                { id: 4, text: "I'am OK" }
            ]
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

    changeNewPostField(newValue) {
        this._state.profile.myPosts.newPostText = newValue;
        this._subscriber(this);
    },
    addNewPost() {
        const posts = this._state.profile.myPosts.posts;
        posts.push({
            id: posts.length,
            text: this._state.profile.myPosts.newPostText
        });
        this._state.profile.myPosts.newPostText = "";
        this._subscriber(this);
    },

    dispatch(action) {
        const type = action.type.toLowerCase().split("");
        type.forEach(function (letter, index, array) {
            if (letter === "-") {
                array[index + 1] = array[index + 1].toUpperCase();
                array.splice(index, 1);
            }
        });

        const method = type.join("");

        action.arguments ? this[method](...action.arguments) : this[method]();
    }
};

export default store;
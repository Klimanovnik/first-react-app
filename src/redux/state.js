const state = {
    profile: {
        myPosts: {
            posts: [
                { id: 1, text: "Hello" },
                { id: 2, text: "Qwerty" },
                { id: 3, text: "Ahahaha" },
                { id: 4, text: "Ololo" }
            ],
            addPostButtonText: "Add Post",
        },
        description: {
            name: "Nikita",
            other: [
                { id: 1, label: "Date of Birth", text: "August 26" },
                { id: 2, label: "City", text: "Zaraysk" },
                { id: 3, label: "About me", text: "Hello, everyone ! This is my first React application." }
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
};

export default state;
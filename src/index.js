import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
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

ReactDOM.render(
    <React.StrictMode>
        <App app={data} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
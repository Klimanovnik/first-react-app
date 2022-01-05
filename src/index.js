import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
  profile: {
    post: [
      { id: 1, text: "Hello" },
      { id: 2, text: "Qwerty" },
      { id: 3, text: "Ahahaha" },
      { id: 4, text: "Ololo" },
      { id: 5, text: "asddfdgfsgd" }
    ]
  },
  data: "data"
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

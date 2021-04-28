import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    console.log(main); 

    // Pure js
    // const hello = React.createElement('h1', null, ["hello from React!"]);

    ReactDOM.render(<App/>, main);
});
//const React = require("react");
//ES6
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";


// conectar un Componente con el DOM
ReactDOM.render(
        <App/>,
    document.getElementById("root")
);
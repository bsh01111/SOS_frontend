import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./Routes";
import path from "path";
import dotenv from "dotenv";

// set env
dotenv.config({ path: path.join(__dirname, ".env") });
dotenv.config();

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

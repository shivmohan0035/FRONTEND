import React from "react";
import reactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <App />  /*call app function from app.jsx file and render it in the div tag which has id root in index.html file.*/
);
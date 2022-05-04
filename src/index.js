import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Pageloadtime } from "./load";

// const root = ReactDOM.createRoot();
Pageloadtime();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// const rootNode = document.getElementById('root');
// ReactDOM.render(<App />, rootNode);

import React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Editor />
      <Previewer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

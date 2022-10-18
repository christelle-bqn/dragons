import React from "react";
import logo from "./logo.svg";
import { Dragons } from "./features/dragons/Dragons";
import {Counter} from "./features/counter/Counter"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dragons/>
      </header>
    </div>
  );
}

export default App;

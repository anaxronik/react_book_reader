import React from "react";
import "./App.scss";
import { Book } from "./pages/book/Book";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Book />
      </div>
    </div>
  );
}

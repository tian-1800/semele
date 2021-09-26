import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Trending from "./components/Trending";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Category />
      <Trending />
      <footer>&copy; 2021 ELEMES ID. ALL RIGHTS RESERVED</footer>
    </div>
  );
}

export default App;

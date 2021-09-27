import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Trending from "./components/Trending";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Category />
      <Trending />
      <BottomNav />
      <Footer />
    </div>
  );
}

export default App;

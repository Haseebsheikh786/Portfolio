import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectList from "./components/ProjectList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <About />
        <ProjectList />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

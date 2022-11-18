import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Header } from "./Components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobsPage from "./Pages/JobsPage";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<JobsPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

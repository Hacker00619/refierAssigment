import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobsPage from "./pages/JobsPage";
import Header from "./components/Header";
import PostJobPage from "./pages/PostJobPage";
import EditJobPage from "./pages/EditJobPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<JobsPage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        <Route path="/edit-job/:id" element={<EditJobPage />} />
      </Routes>
    </Router>
  );
}

export default App;

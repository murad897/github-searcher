import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GithubContext } from "./components/context";
import Navbar from "./components/layout/Navbar";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import User from "./components/pages/User";

const App = () => {
  return (
    <GithubContext>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/user/:loginName" element={<User />}></Route>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </GithubContext>
  );
};

export default App;

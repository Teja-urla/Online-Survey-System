import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Textform from "./Textform";
import Header from "./components/Header";
import Template from "./components/Template";
import Mainbody from "./components/Mainbody";
// import Header from "./Header";
import Form1 from "./components/New Form";
import Homepage from "./components/Homepage";
import Question_form from "./components/Question_form";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Saved from "./components/Saved"
import RecentSurvey from "./components/RecentSurveys";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/header" element={<Header />} />
          <Route path="/Former" element={<Template />}></Route>
          <Route path="/Add" element={<Form1 />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Home" element={<Homepage />}></Route>
          <Route path="/RecentSurveys" element={<RecentSurvey />}></Route>
          <Route path="/Saved" element={<Saved />}></Route>
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
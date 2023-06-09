import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Template from "./Template"
import { BsTrash } from "react-icons/bs";
import { IconButton, Typography } from "@material-ui/core";
import Profile from "./Profile";
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
function Header() {
  const {user,isAuthenticated}=useAuth0();
  console.log(user);
  const id_=user.email;
  return (
    <>
     
<nav class="navbar navbar-expand-custom navbar-mainbg">
<img src="https://png.pngitem.com/pimgs/s/399-3993710_sample-design-and-management-survey-questionnaire-red-wishlist.png"
            style={{ height: "45px", width: "45px", position:"relative", left:"5px" }}
          ></img>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>

              <li class="nav-item ms-5">
              <Link to="/Home" state={user}>
              Home
              </Link>
              </li>

              <li>
              <Link to="/Former" state={user} >
              <i class="far fa-clone"/>Add survey
              </Link>
              </li>

              <li>
              <Link to="/RecentSurveys" state={user} >
              <i class="far fa-copy"/> Recent Forms
              </Link>
              </li>
              <li>
                <Link to="/Add" state={user}></Link>
                <i class="far fa-clone"/>Add survey form
              </li>
              <li>
              { isAuthenticated ? <LogoutButton /> : <LoginButton />}
              </li>
              <li>
              {isAuthenticated&& <Profile></Profile>}
              </li>
            </ul>
         
        </div>
    </nav>
{/* <h1>SURVEY</h1>
<section class="course">
<h1> Courses we offer</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatum.</p>

<div class="row">
    <div class="course-col">
         <img src="https://img.freepik.com/free-vector/election-referendum-campaign_74855-6386.jpg?t=st=1657609833~exp=1657610433~hmac=83263f400e05c681010171846d3ee73749642777a92904fcdaa1c126817e53e9&w=996"></img>
    </div>

    <div class="course-col">
         <img src="https://img.freepik.com/free-vector/flat-feedback-concept-with-devices_23-2148959887.jpg?w=996&t=st=1657610246~exp=1657610846~hmac=556c951cdb72b9dca989dffb8d936edf0c5fe66cf2890be459d0ce13c2023243"></img>

  </div>
  <div class="course-col">
    <img src="https://img.freepik.com/free-vector/people-answering-online-survey_1262-19290.jpg?w=996&t=st=1657610389~exp=1657610989~hmac=8a75f5881cdb1ee0f538359745a6b1773c32eb749e554609a2c2ee8b45164e6b"></img>
</div>
</div>
</section> */}
    </>
  );
}

export default Header;
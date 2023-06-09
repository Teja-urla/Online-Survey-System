import React from "react";
import Header from "./Header";
import "./New Form.css";
import Question_form from "./Question_form";
import CenteredTabs from "./Tabs";
import axios from "axios";
import {useState,useEffect} from "react"
import { BrowserRouter as Router, Routes, Route, Link ,useLocation} from "react-router-dom";

 function Form1(props) {

  let location=useLocation();
console.log(location.state);
let user=location.state;
const survey=[user];


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
                <Link to="/Home">
                Home
                </Link>
                </li>
  
                <li>
                <Link to="/Former" >
                <i class="far fa-clone"/>Add survey
                </Link>
                </li>
  
                <li>
                <Link to="/RecentSurveys" target="_blank">
                <i class="far fa-copy"/> Recent Forms
                </Link>
                </li>
              </ul>
           
          </div>
      </nav>
      <div className="form_header">
        <div className="form_header_left">

          <input
            type="text"
            placeholder="Untitled form"
            className="form_name"
          ></input>
        </div>
        <div className="form_header_right"></div>
      </div>
      <CenteredTabs></CenteredTabs>
       <Question_form survey={survey}></Question_form>
    </>
  );
}
export default Form1;

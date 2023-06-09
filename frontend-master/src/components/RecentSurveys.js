import React from "react";
import Header from "./Header";
import "./New Form.css";
import Question_form from "./Question_form";
import CenteredTabs from "./Tabs";
import axios from "axios";
import {useState,useEffect} from "react"
import { BrowserRouter as Router, Routes, Route, Link ,useLocation} from "react-router-dom";
import React_form from "./ReactForm";

 function React_survey(props) {

  let location=useLocation();
console.log(location.state);
let user=location.state;
let user_id=user.email;
const [list,setlist]=useState([]);
  const [survey, setsurvey] = useState('');
  const[isPending, setIspending]=useState(true);

  useEffect(()=>{axios.get("http://192.168.51.74:9000/ReactForm/list",{params:{ID:user_id}})
  .then(function (res){
  console.log(res.data);
  setlist(res.data);
  });},[])

useEffect(()=>{axios.get("http://192.168.51.74:9000/ReactForm",{params:{ID:user_id}})
.then(function (res){
console.log( res.data.questions);
let que_data=[res.data.questions,user,res.data._id,res.data.document_name,res.data.doc_desc];
setsurvey(que_data);
console.log(que_data);
setIspending(false);
});},[])

const fun = (parameter)=>{
  axios.get("http://192.168.51.74:9000/ReactForm/single/"+parameter)
.then(function (res){
console.log( res.data.questions);
let que_data=[res.data.questions,user,res.data._id];
console.log(que_data);
setIspending(false);
});
console.log(parameter)}
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
      {console.log(list)}
      {list.map(function(item){
        return <div key={item._id}>
          <button onClick={()=>fun(item._id)} type="button" class="btn btn-primary">{item._id}</button></div>
      })}
      {isPending &&  <div>Loading...</div> }
      {!isPending && <React_form survey={survey}></React_form>}
    </>
  );
}
export default React_survey;

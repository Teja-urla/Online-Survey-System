import React from "react";
import "./Template.css";
import uuid from "react-uuid";
import { BrowserRouter as Router, Routes, Route, Link ,useLocation } from "react-router-dom";
import Mainbody from "./Mainbody";
import Header from "./Header";
function Template(props) {
  const createForm = () => {
    // console.log("clicked");
    const id_ = uuid;
  };
  let location=useLocation();
  console.log(location.state);
  let obj=location.state;
  console.log(obj);
  return (
    <>
    <Header></Header>

      <div className="template_section">
        <div className="template_top">
          <div className="template_left">
            <span style={{ fontSize: "16px", color: "#202124" }}>
              Start New Form
            </span>
          </div>
          <div className="template_right">
            <div className="gallery_button">Template gallery</div>
          </div>
        </div>
        <div className="template_body">
          <div>
            <div className="card">
              <div className="one_image" onClick={createForm}>
                <Link to="/Add" state={obj}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIx4ZF48xXQQiR570Ot4yYawkiqrFF5AB2p-z-qNd_iiN07Woj816PL9rXrCw_BbXPks&usqp=CAU"
                    className="card_image1"
                  />
                </Link>
                <p className="card_Title"> Add Form</p>
              </div>

              <div className="two_image">
                {/* <span>Add Form</span> */}
                <img
                  src="https://www.developerdrive.com/wp-content/uploads/2019/01/google-forms-get-email-notifications.jpg"
                  className="card_image2"
                />
                <p className="card_Title"> Contact Us</p>
              </div>
            </div>
          </div>
          {/* <div className="card">
          
        </div> */}
        </div>
      </div>
      <Mainbody></Mainbody>
    </>
  );
}

export default Template;

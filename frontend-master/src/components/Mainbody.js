import React from "react";
import "./Mainbody.css";
function Mainbody() {
  return (
    <div className="mainbody">
      <div className="mainbody_top">
        <div
          className="mainbody_top_left"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          Recent forms
        </div>
        <div
          className="mainbody_top_right"
          style={{ fontSize: "14px", fontWeight: "125" }}
        >
          Owner
        </div>
      </div>
      <div className="mainbody_docs">
        <div className="doc_card">
          <div className="card1">
            <div className="formImg1">
              <img
                src="https://theconfuzedsourcecode.files.wordpress.com/2019/11/simple-sample-google-form.png"
                className="doc_image"
              />
            </div>
          </div>
          <div className="doc_card_content">
            <div
              className="doc_content"
              style={{ fontSize: "12px", color: "grey" }}
            >
              <div className="content_left">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    style={{
                      color: "white",
                      fontSize: "12px",
                      backgroundColor: "#6E2594",
                      padding: "3px",
                      marginRight: "3px",
                      barderRadius: "2px",
                    }}
                  />
                </svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;

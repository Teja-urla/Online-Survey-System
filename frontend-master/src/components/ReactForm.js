import React from "react";
import { useEffect, useState } from "react";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Typography } from "@material-ui/core";
import { BsTrash, BsFillFilterSquareFill } from "react-icons/bs";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Radio from "@material-ui/icons/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./React_form.css";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios"
import { useAuth0 } from  "@auth0/auth0-react";
import { useLocation } from "react-router-dom"
function React_form(props) {
  // console.log(props.survey);
  // var initialQ=[];
  // for(var key in props){
  //   initialQ[key]=props.survey[key];
  // }
  const [questions, setQuestions] = useState([]);
console.log(props.survey[1]);
useEffect(()=>{
  setQuestions((questions)=>[...questions,...props.survey[0]]);
  console.log('i fire once');
},[]);
  const [documentName, setDocName] = useState(props.survey[3]);

  const [documentDescription, setDocDesc] = useState(props.survey[4]);

const user_id=props.survey[1].email;



  function changeQuestion(text, i){
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion)
  }

  function addQuestionType(i, type){
    let qs = [...questions];
    console.log(type)
    qs[i].questionType = type;
    setQuestions(qs);
  }

  function changeOptionValue(text,i,j){
    var optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setQuestions(optionsQuestion)
    console.log(optionsQuestion)
}

function removeOption(i, j){
  var RemoveOptionQuestion = [...questions];
  if(RemoveOptionQuestion[i].options.length > 1 ){
    RemoveOptionQuestion[i].options.splice(j,1);
    setQuestions(RemoveOptionQuestion)
    console.log(i + " " + j);
  }
}

function addOption(i){
  var optionsOfQuestion = [...questions];
  if(optionsOfQuestion[i].options.length  < 5){
    optionsOfQuestion[i].options.push({optionText: "Option" + (optionsOfQuestion[i].options.length + 1)})
  }
  else {
console.log("Max 5 options");
  }
  setQuestions(optionsOfQuestion)
}

function copyQuestion(i){
  expandCloseAll();
  let qs = [...questions];
  var newQuestion = qs[i]
  setQuestions([...questions, newQuestion])
}

function deleteQuestion(i){
  let qs = [...questions];
if(questions.length > 1){
  qs.splice(i,1);
}
setQuestions(qs);
}

function requiredQuestion(i){
var reqQuestion = [...questions];
reqQuestion[i].required = ! reqQuestion[i].required
console.log( reqQuestion[i].required[i])
setQuestions(reqQuestion)
}

function addMoreQuestionField(){
  expandCloseAll();
setQuestions([...questions, {questionText: "Question", questionType:"radio", options : [{optionText:"option 1"}], open: true, required:false}]);
}

function expandCloseAll(){
  let qs = [...questions];
  for(let j = 0; j < qs.length ; j++){
    qs[j].open = false;
  }
  setQuestions(qs);
}

function handleExpand(i){
  let qs = [...questions];
  for(let j = 0; j < qs.length ; j++){
  if(i == j){
    qs[i].open = true;
  }
  else{
    qs[j].open = true;
  }
  }
  setQuestions(qs);
}

function commitToDB(){
  axios.post("http://192.168.51.74:9000/add_questions",
    {
      user_id: user_id,
      document_name: documentName,
      doc_desc: documentDescription,
      questions: questions,
    })
}

function GetFromDB(){
  
}

  function questionsUI() {
    return questions.map((ques, i) => (

<Accordion
        expanded={questions.open}
        className={questions[i].open ? "add border" : ""}
        onChange={()=>{handleExpand(i)}}
      >
        <AccordionSummary
          aria-controls="panella-content"
          id="panelia-header"
          elevation={1}
          style={{ width: "100%" }}
        >
          {!questions[i].open ? (
            <div className="saved_questions">
              <Typography
                style={{
                  fontSize: "15px",
                  fontweight: "400px",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                }}
              >

                {i+1}. {questions[i].questionText}
                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="red"
                            style={{ marginRight: "3px" }}
                            required={ques.type}
                          />
                        }
                        label={
                          <Typography
                            style={{
                              fontFamily: "Roboto,Ariel,sans-serif",
                              fontSize: "13px",
                              fontweight: "400",
                              letterSpacing: ".2px",
                              lineHeight: "20px",
                              color: "red",
                            }}
                          >
                            {ques.options[j].optionText}
                          </Typography>
                        }
                      ></FormControlLabel>
                    </div>
                  </div>
                ))}
              </Typography>
            </div>
          ) : (
            ""
          )}
        </AccordionSummary>

        <div className="question_boxes">
          <AccordionDetails className="add_question">
            <div className="add_question_top">
              <input
                type="text"
                className="question"
                placeholder="Question"
                value={ques.questionText}
                onChange={(e)=>{changeQuestion(e.target.value, i)}}
              ></input>
              <Select
                className="select"
                style={{ color: "red", fontSize: "13px" }}
              >
                <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}>
                  {" "}
                  <SubjectIcon style={{ marginRight: "10px" }} /> paragraph
                  </MenuItem>
                <MenuItem id="checkbox" value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}>
                  {" "}
                  <CheckBoxIcon
                    style={{ marginRight: "10px", color: "red" }}
                    checked
                    
                  />
                  AnswerBox
                </MenuItem>
                <MenuItem id="radio" value="Radio" onClick={()=>{addQuestionType(i,"radio")}}
>
                  {/* <Radio
                    style={{ marginRight: "13px", color: "#70757a" }}
                    checked
                  /> */}
                  <i class="bi bi-circle" style={{ marginRight: "13px", color: "red" }} checked></i>
                  Multiple choice
                </MenuItem>
              </Select>
            </div>
            {ques.options.map((op, j) => (
              <div className="add_question_body" key={j}>
                {ques.questionType != "text" ? (
                  <input
                    type={ques.questionType}
                    style={{ marginRight: "10px" }}
                  />
                ) : (
                    <i class="bi bi-body-text" style={{ marginRight: "10px" }}></i>
                )}
                <div>
                  <input
                    type="text"
                    className="text_input"
                    placeholder="option"
                    value={ques.options[j].optionText}
                    onChange={(e)=>{changeOptionValue(e.target.value, i, j)}}
                  ></input>
                </div>
                {/* <CropOriginalIcon style={{ color: "#5f6368" }} /> */}
                <IconButton aria-label="delete">
                  <CloseIcon onClick={()=>removeOption(i, j)}  />
                </IconButton>
              </div>
            ))}

            {ques.options.length < 5 ? (
              <div className="add_question_body">
                <FormControlLabel
                  disabled
                  control={
                    ques.questionType != "text" ? (
                     <>
 <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1"></label>
</div>

                      </> 
                    ) : (
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                    )
                  }
                  label={
                    <div>
                      <input
                        type="text"
                        className="text_input"
                        style={{ fontSize: "13px", width: "60px" }}
                        placeholder="Add "
                      ></input>

                      <button type="button" class="btn btn-success" 
                        onClick={()=>addOption(i)}>Add Option</button>
                    </div>
                  }
                />
              </div>
            ) : (
              ""
            )}

            <div className="add_footer">
              <div className="add_question_bottom_left">
                <Button
                  size="small"
                  style={{
                    texttransform: "none",
                    color: "red",
                    fontsize: "13px",
                    fontweight: "600",
                  }}
                >

                </Button>
              </div>

              <div className="add_question_bottom">
               
              <button type="button" class="btn btn-info" onClick={addMoreQuestionField}>Add Question</button>
                <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}} className="plus">
                  <BsTrash />
                </IconButton>

               
              </div>
            </div>
          </AccordionDetails>

        </div>

      </Accordion>
    ));
  }

  return (
    <div>
      <div className="React_form">
        <br></br>
        <div className="section">
        <button class="btn btn-secondary-lg btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
 <h6> Instructions</h6></button>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Button Functions</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <button type="button" class="btn btn-info" >Add Question</button><br></br> can be used to Add the questions
    <br></br>
    <br></br>
    <hr></hr>
    <button type="button" class="btn btn-success" >Add Option</button> <br></br> At max You can Add only 5 Options
    <br></br>
    <br></br>
    <hr></hr>
    <button type="button" class="btn btn-warning" >Save Survey</button> <br></br> Save button is used for saving the responses
    <br></br>
    <br></br>
    <hr></hr>
    <IconButton aria-label="delete" >
      <BsTrash />
     </IconButton>  
     To delete questions
  </div>
</div>
          <div className="question_title_section">
            <div className="React_form_top">
              <input
                type="text"
                className="React_form_top_name"
                style={{ color: "black" }}
                placeholder=
                {documentName}
                onChange={(e) => {
                  setDocName(e.target.value);}}
              ></input>
              <input
                type="text"
                className="React_form_top_desc"
                placeholder={documentDescription}
                onChange={(e) => {
                  setDocDesc(e.target.value);
                }}
              ></input>
            </div>
          </div>

        
          {questionsUI()}
          <Button
              variant="contained"
              color="primary"
              onClick={commitToDB}
              style={{ fontSize: "14px" }}
            >
              Save
            </Button>
        </div>
      </div>
    </div>
  );
}
export default React_form;

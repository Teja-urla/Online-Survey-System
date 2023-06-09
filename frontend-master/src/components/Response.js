import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Display from './Display';
import Display2 from './Display2'
import {useState} from 'react'
 const  App = () =>{
const [blogs, setBlogs] = useState([
  {question: "How to delete a directory in Linux?",
  questionId: "wonf538nbgkd",
  options: [
    {optionText: "ls"},
    {optionText: "delete"},
    {optionText: "remove"}
  ]},
  
  {
  question: "how are you",
  questionId: "wonf538nmvfo",
  options: [
    {optionText: "hi"},
    {optionText: "how are you"},
    {optionText: "fine"},
    {optionText: "thanks"}

  ]
  }

]);


  return(

  <div>
    <Display2 blogs={blogs} title={"All Blogs"} ></Display2>
  </div>

  )
 }

export default App;


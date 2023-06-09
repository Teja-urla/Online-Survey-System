import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Display2({ blogs, }) {

const [mark,setmark]=useState(blogs);
const [pp,setpp]=useState([]) // sending an empty array to pp
var arr=[]
console.log(blogs)

return (
<>
<section class="course" style={{backgroundColor:"#C6C6C6"}}>
    <div className='self'>
      <h1 className='text-center my-5' style={{color:"rgb(6, 222, 241)", borderRadius:"6px"}}>Survey</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
  
              <hr className="divider-horizontal" />
    

              <hr className="divider-horizontal" />
    
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Enter your Name:</h3>
                  <input type="text" className="form-control" id="Username" aria-describedby="Username" placeholder="Along with surname"/>
                </div>
              </div>
  
              <hr className="divider-horizontal" />
    
              <div className="card">

              {mark.map((marks)=> (
                <div className="blog-preview" key = {marks.question}>
                
                <h5 className="card-title"> {marks.question}</h5>    
                <ul>
            
                {marks.options.map((option)=>(
                <div key = {option.optionText}>
                  
                  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="ifbs" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked" >
  <button onClick={()=>{
    var QuesId=marks.questionId;
    var Ques=marks.question;
    var OptName=option.optionText;
    setpp([...pp, [{QuesId,Ques,OptName}] ])}} >{option.optionText}
</button>
  </label>
</div>

                    </div>
                    ))}
                    </ul>
                    <hr class="border-primary border-3 opacity-75"/>
                    </div>
                 ))}

              </div>
  
              <hr className="divider-horizontal" />
     </div>
     
        </div>
        <button type="button" class="btn btn-info" onClick={()=>{console.log(pp)}}> Submitt </button>
      </div>
      
  </section>

</>
    )
}
export default Display2


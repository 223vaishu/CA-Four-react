
import React,{useState} from "react";
import question from "../questions"
import Result from "./Result"

export default function QuestionBox(props){
  let color = props.props
  let [highlight, setLight]= useState(false)

  let css = {
    background:color?"#A020F0":"#FFFF00",
  }

  let highlightstyle= {
    color : highlight?"purple":"black",

  }

  let [QuesNo,setNo]= useState(0)
  let [score , setScore]=useState(0)

  let handleOption =(el)=>{
    console.log(el.target.value)

    setScore((el.target.value === 'true'?score+1:score))
    setNo(QuesNo+1)
  }

  return(
    <>
    {QuesNo <5 ?(
      <div className='quesBox' style={css}>
      <h2>Question: {QuesNo+1} out of 5</h2>
      <h3 style={highlightstyle}>{question[QuesNo].text}</h3>
      <div className='optbox'>
      {question[QuesNo].options.map((el)=>(
        <button className='options' value={el.isCorrect} key={el.id} onClick={handleOption} >{el.text}</button>
      ))}
      </div>
      <div>
        <button className='highlightbtn' onClick={()=>setLight(true)}>Highlight</button>
        <button className='highlightbtn' onClick={()=>setLight(false)}>Remove Highlight</button>
      </div>
    </div>
    )
    :(<Result props={[score,color]}/>)
    }
    </>  
  )
}




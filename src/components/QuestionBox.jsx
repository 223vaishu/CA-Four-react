import React from 'react'
import Result from './Result'
import style from './Question.css'

import React, { createContext, useEffect, useRef, useState } from 'react'
import questions from '../questions'

export const ScoreBoard = createContext()
function QuestionBox(){
  const[count,setcount]=useState(1)
  const que = questions[count-1]
  const [HighlightColor,setHigh] = useState(true)
  const[bColor,setcolor]=useState(true)

  let highliteRef = useRef()
  let[score,setscore]=useState(0)

  function HighlightColor(){
    setHigh(false)
  }
  function BackGroundColor(){
    setcolor(!bColor)
  }
  function ChangeCount(correct){
     if(count<questions.length+1){
      setcount(count+1)
     }
     if (correct){
      setscore(score+1)
     }
     console.log(score)
  }

  function removeHighLight(){
    setHigh(true)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = bColor? '#373a3a':'#bbb4b487'
  })

  return(
    <>
    {(count > questions.length)?
    <div>
      <ScoreBoard.Provider value={{setscore,score,setcount}}>
        <Result/>
      </ScoreBoard.Provider>
    </div>
      </h1>
     </div>
    </div>
    
  }
    </>
  )

}

// export default function QuestionBox() {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default QuestionBox



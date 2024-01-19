import React from "react";

export default function Result(props){
    let result = props.props[0]
    let color = props.props[1]

    let styleresults = {
        background : color?"#a2a8d3":"#393e46"
    }
    let handlerestart = ()=>{
        window.location.reload()
    }

    return(
        <div className="resultbox" style={styleresults}>
            <h1>Final Results</h1>
            <h2>{result}out of 5 correct - {(result/5)*100}.00%</h2>
            <button className="restart" onClick={handlerestart}>Restart game</button>
        </div>
    )
}
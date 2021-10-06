import React from "react";

const TestGrandChild = (props) => {
  
  return (
    <div>
      <div style={{padding:'10px', margin: '10px', border:'1px solid blue'}}>I'm grandchild:
        <p>{props.text}</p>
        <input onChange={props.onChange}/>
      </div>
    </div>
  )
}
export default TestGrandChild
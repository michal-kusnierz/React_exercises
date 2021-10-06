import React from "react";

const TestChild = (props) => (
  <>
    <div style={{padding:'10px', margin: '10px', border:'2px dashed green'}}>I'm child: 
      <p>{props.text}</p>
      <div>input value from grandchild:
        <p style={{color: 'red', overflow: 'hidden'}}> {props.value}</p>
      </div>
    </div>
  </>
)

export default TestChild
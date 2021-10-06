import React, { useState } from 'react';
import TestChild from './TestChild';
import TestGrandChild from './TestGrandChild';

const Test = () => {
  const childTxt = 'render this var in child';
  const grandChildTxt = 'render this var in grandchild';
  const [enteredValue, setEnteredValue] = useState('empty');
  const onChangeHandler = (x) => {
    setEnteredValue(x);
  };

  return (
    <div style={{maxWidth: '50vw'}}>
      <TestChild text={childTxt} value={enteredValue} />
      <TestGrandChild
        text={grandChildTxt}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default Test;

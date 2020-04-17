import React from 'react';
import { FlowForm2, Step, Input, ShowData } from 'flow-form';
import './App.css';

function App() {
  // const checkNumber = e => {
  //   return !Number.isInteger(parseFloat(e.target.value));
  // };

  const checkString = e => {
    return !e.target.value || !e.target.value.length;
  };

  // TODO initial Values
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
      <FlowForm2>
        <Input validate={checkString}>Test 1</Input>

        <ShowData />
      </FlowForm2>

      <FlowForm2>
        <Step title="Solo Flow">
          <Input>Test 2</Input>
        </Step>

        <ShowData />
      </FlowForm2>

      <FlowForm2>
        <Step title="First Step">
          <Input>Test 3</Input>
        </Step>

        <Step title="Second Step">
          <Input>Test 4</Input>
          <Input>Test 5</Input>
        </Step>

        <ShowData />
      </FlowForm2>
    </div>
  );
}

export default App;

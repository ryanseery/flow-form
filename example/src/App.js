import React from 'react';
import { FlowForm2, Step2, Input2, ShowData } from 'flow-form';
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
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FlowForm2>
        <Input2 validate={checkString}>Test 1</Input2>

        <ShowData />
      </FlowForm2>

      <FlowForm2>
        <Step2 title="Solo Flow">
          <Input2>Test 2</Input2>
        </Step2>

        <ShowData />
      </FlowForm2>

      <FlowForm2>
        <Step2 title="First Step">
          <Input2>Test 3</Input2>
        </Step2>

        <Step2 title="Second Step">
          <Input2>Test 4</Input2>
          <Input2>Test 5</Input2>
        </Step2>

        <ShowData />
      </FlowForm2>
    </div>
  );
}

export default App;

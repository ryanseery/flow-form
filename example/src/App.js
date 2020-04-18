import React from 'react';
import { FlowForm2, Step, Input, ShowData } from 'flow-form';
import './App.css';

function App() {
  const checkString = e => {
    return !e.target.value || !e.target.value.length;
  };

  const checkNumber = e => {
    return !Number.isInteger(parseFloat(e.target.value));
  };

  // TODO initial Values
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
      <FlowForm2>
        <Input validate={checkString}>Test 1</Input>

        <ShowData />
      </FlowForm2>

      <FlowForm2>
        <Step title="First Step">
          <Input validate={checkString}>Test 3</Input>
        </Step>

        <Step title="Second Step">
          <Input>Test 4</Input>
          <Input type="number" validate={checkNumber}>
            Number
          </Input>
        </Step>

        <ShowData />
      </FlowForm2>
    </div>
  );
}

export default App;

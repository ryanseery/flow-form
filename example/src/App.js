import React from 'react';
import { FlowForm2, Step2, Input2 } from 'flow-form';
import './App.css';

function App() {
  // const checkNumber = e => {
  //   return !Number.isInteger(parseFloat(e.target.value));
  // };

  // const checkString = e => {
  //   return !e.target.value || !e.target.value.length;
  // };

  // TODO initial Values
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FlowForm2>
        <Input2 />
      </FlowForm2>

      <FlowForm2>
        <Step2 title="Solo">
          <Input2 />
        </Step2>
      </FlowForm2>

      <FlowForm2>
        <Step2 title="First Test">
          <Input2 />
        </Step2>

        <Step2 title="Second Test">
          <Input2 />
        </Step2>
      </FlowForm2>
    </div>
  );
}

export default App;

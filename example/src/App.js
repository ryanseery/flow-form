import React from 'react';
import { FlowForm, Input } from 'flow-form';
import './App.css';

function App() {
  const checkNumber = e => {
    console.log('test: ', Number.isInteger(parseFloat(e.target.value)));
    return Number.isInteger(e.target.value);
  };

  const checkString = e => {
    console.log('YO: ', e.target.value);
    return !e.target.value || !e.target.value.length;
  };

  // TODO allow style, initial Values
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FlowForm onSubmit={data => console.log('data: ', data)}>
        <Input validate={checkString}>Text</Input>
        <Input type="number" validate={checkNumber} required>
          Number
        </Input>
      </FlowForm>
    </div>
  );
}

export default App;

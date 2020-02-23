import React from 'react';
import { FlowForm, Input } from 'flow-form';
import './App.css';

function App() {
  const checkNumber = value => {
    console.log('test: ', Number.isInteger(parseFloat(value)));
    return Number.isInteger(value);
  };

  const checkString = value => {
    console.log('YO: ', value);
    return !value || !value.length;
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FlowForm onSubmit={data => console.log('data: ', data)}>
        <Input validate={checkString} required>
          Text
        </Input>
        <Input type="number" validate={checkNumber} required>
          Number
        </Input>
      </FlowForm>
    </div>
  );
}

export default App;

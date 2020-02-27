import React from 'react';
import { FlowForm, Input } from 'flow-form';
import './App.css';

function App() {
  const checkNumber = e => {
    return !Number.isInteger(parseFloat(e.target.value));
  };

  const checkString = e => {
    return !e.target.value || !e.target.value.length;
  };

  // TODO initial Values
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FlowForm onSubmit={data => console.log('data: ', data)}>
        <Input validate={checkString}>Text</Input>
        <Input type="number" validate={checkNumber} required>
          Number
        </Input>
        <Input type="email">Email</Input>
        <Input type="password">Password</Input>
        <Input type="tel">Phone Number</Input>
        <Input type="url">Url</Input>
        <Input type="color">Color</Input>
        <Input type="textarea">Text Area</Input>
      </FlowForm>
    </div>
  );
}

export default App;

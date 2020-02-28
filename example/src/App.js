import React from 'react';
import { FlowForm, Input, ShowData } from 'flow-form';
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
      <FlowForm onSubmit={data => console.log('data: ', data)} style={{ width: '30%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>
            <Input validate={checkString} required helperText="Test helper text" errMsg="Custom error message">
              Text
            </Input>
            <Input type="number" validate={checkNumber} required>
              Number
            </Input>
            <Input type="email" helperText="Test helper text">
              Email
            </Input>
            <Input type="password">Password</Input>
            <Input type="tel">Phone Number</Input>
            <Input type="url">Url</Input>
            <Input type="color">Color</Input>
            <Input type="textarea">Text Area</Input>
          </div>
          <ShowData />
        </div>
      </FlowForm>
    </div>
  );
}

export default App;

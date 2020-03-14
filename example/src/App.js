import React from 'react';
import { FlowForm, Input, ShowData, Step } from 'flow-form';
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
      <FlowForm
        onSubmit={data => console.log('data: ', data)}
        style={{ width: '30%' }}
        initialValues={{ text: 'initial' }}
      >
        <Step title="Step 1">
          <Input required>First Name</Input>
          <Input>Last Name</Input>
        </Step>

        <Step title="Step 2">
          <Input type="email">Email Address</Input>
          <Input type="tel">Phone Number</Input>
        </Step>
        <ShowData />
      </FlowForm>
    </div>
  );
}

export default App;

import React from 'react';
import { FlowForm, Step, Field, ShowData } from 'flow-form';
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
      <FlowForm onSubmit={data => console.log('onSubmit: ', data)}>
        <Field validate={checkString}>Test 1</Field>

        <ShowData />
      </FlowForm>

      <FlowForm onSubmit={data => console.log('onSubmit: ', data)}>
        <Step title="First Step">
          <Field validate={checkString}>Test 3</Field>
        </Step>

        <Step title="Second Step">
          <Field>Test 4</Field>
          <Field type="number" validate={checkNumber}>
            Number
          </Field>
        </Step>

        <ShowData />
      </FlowForm>
    </div>
  );
}

export default App;

import React from 'react';
import { FlowForm, Field } from 'flow-form';
import './App.css';

function App() {
  const checkString = e => {
    return !e.target.value || !e.target.value.length;
  };

  // const checkNumber = e => {
  //   return !Number.isInteger(parseFloat(e.target.value));
  // };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FlowForm onSubmit={data => console.log('onSubmit: ', data)} showData>
        <Field type="text" validation={checkString}>
          Test 1
        </Field>

        <Field type="number" required>
          Numbers
        </Field>
      </FlowForm>
    </div>
  );
}

export default App;

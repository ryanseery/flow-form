import React from 'react';
import { FlowForm, Field } from 'flow-form';
import './App.css';

function App() {
  const checkString = e => {
    return !e.target.value || !e.target.value.length;
  };

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

        <Field type="select" name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Field>

        <Field type="textarea">Text Area</Field>
      </FlowForm>
    </div>
  );
}

export default App;

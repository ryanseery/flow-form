import React from 'react';
import { FlowForm, Field } from 'flow-form';
import './App.css';

function App() {
  const checkString = e => {
    return !e.target.value || !e.target.value.length;
  };

  const options = [
    { value: 'volvo', name: 'Volvo' },
    { value: 'saab', name: 'Saab' },
    { value: 'mercedes', name: 'Mercedes' },
    { value: 'audi', name: 'Audi' },
  ];

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
          {options.map(option => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </Field>

        <Field type="textarea">Text Area</Field>

        <Field type="radio" name="Radio">
          <input name="True" value="true" />
          <input name="False" value="false" />
        </Field>

        <Field type="checkbox" name="Checkbox">
          <input name="True" value="true" />
          <input name="False" value="false" />
        </Field>
      </FlowForm>
    </div>
  );
}

export default App;

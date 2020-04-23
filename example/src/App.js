import React from 'react';
import { FlowForm, Step, Field, ShowData, FieldList } from 'flow-form';
import './App.css';

const testSelect = [
  { name: 'Volvo', value: 'volvo' },
  { name: 'Saab', value: 'saab' },
  { name: 'Mercedes', value: 'mercedes' },
  { name: 'Audi', value: 'audi' },
];

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
        <Field validation={checkString}>Test 1</Field>

        <ShowData />
      </FlowForm>

      <FlowForm onSubmit={data => console.log('onSubmit: ', data)}>
        <Step label="First Step">
          <Field validation={checkString}>Test 3</Field>

          <Field name="color" type="color" />

          <Field type="select" options={testSelect}>
            Cars
          </Field>

          <FieldList label="Field List" add>
            <FieldList.Item>Name</FieldList.Item>
            <FieldList.Item type="email" name="email" />
          </FieldList>
        </Step>

        <Step label="Second Step">
          <Field>Test 4</Field>
          <Field type="number" validation={checkNumber}>
            Number
          </Field>
        </Step>

        <ShowData />
      </FlowForm>
    </div>
  );
}

export default App;

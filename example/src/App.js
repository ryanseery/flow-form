import React from 'react';
import { FlowForm, Step, Field, FieldList } from 'flow-form';
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
      <FlowForm onSubmit={data => console.log('onSubmit: ', data)} showData>
        <Field validation={checkString} name="Test 1" />

        <FieldList label="Tools" add>
          <FieldList.Item validation={checkString}>Name</FieldList.Item>
          <FieldList.Item type="email" name="email" />
        </FieldList>
      </FlowForm>

      <FlowForm onSubmit={data => console.log('onSubmit: ', data)} showData>
        <Step label="First Step">
          <Field validation={checkString}>Test 3</Field>

          <Field name="color" type="color" />

          <Field type="select" options={testSelect}>
            Cars
          </Field>

          <FieldList label="Field List" add>
            <FieldList.Item validation={checkString}>Name</FieldList.Item>
            <FieldList.Item type="email" name="email" />
          </FieldList>

          <Field type="fileDrop">Floor Plans</Field>
        </Step>

        <Step label="Second Step">
          <Field>Test 4</Field>
          <Field type="number" validation={checkNumber}>
            Number
          </Field>

          <FieldList label="Friends">
            <FieldList.Item validation={checkString}>Name</FieldList.Item>
            <FieldList.Item type="email" name="email" />
          </FieldList>
        </Step>
      </FlowForm>
    </div>
  );
}

export default App;

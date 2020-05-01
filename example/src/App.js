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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* <FlowForm onSubmit={data => console.log('onSubmit: ', data)}>
        <Field validation={checkString} name="Test 1" />

        <FieldList label="Tools" add>
          <FieldList.Item validation={checkString}>Name</FieldList.Item>
          <FieldList.Item type="email" name="email" />
        </FieldList>
      </FlowForm> */}

      <FlowForm onSubmit={data => console.log('onSubmit: ', data)} showData>
        <Step label="First Step">
          <Field validation={checkString}>Test 3</Field>

          <Field type="color" name="color" />

          <Field type="number" required>
            Number
          </Field>

          <Field type="checkbox" options={['bike', 'car', 'plane']}>
            Checkbox
          </Field>

          <Field type="radio" options={['plus', 'minus', 'multiply']}>
            Maths
          </Field>

          <Field type="select" options={testSelect}>
            Car
          </Field>

          <Field type="imgPreview">Image</Field>

          <FieldList label="Field List" add>
            <FieldList.Item validation={checkString}>Name</FieldList.Item>
            <FieldList.Item type="email" name="email" required />
          </FieldList>

          <Field type="dragAndDrop">Floor Plans</Field>
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

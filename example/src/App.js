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
      <FlowForm onSubmit={data => console.log('onSubmit: ', data)} showData>
        <Field type="text">TEST 1</Field>

        <Field type="number">Numbers</Field>
        {/* <Step label="First Step">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Field validation={checkString}>Test 3</Field>

            <Field type="color" name="color" />
          </div>

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
        </Step> */}
      </FlowForm>
    </div>
  );
}

export default App;

import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FlowForm, Field } from 'flow-form';

function checkString(e) {
  return !e.target.value || !e.target.value.length;
};

const options = [
  { value: 'volvo', name: 'Volvo' },
  { value: 'saab', name: 'Saab' },
  { value: 'mercedes', name: 'Mercedes' },
  { value: 'audi', name: 'Audi' },
];

function App() {
  return (
    <div className="container">
      <FlowForm onSubmit={data => console.log('onSubmit: ', data)} showData initialValues={{
        initial: 'YOOOOOOO'
      }}>

        <Field type="text" validation={checkString}>
          Test
        </Field>

        <Field type="text" name='Here' />

        <Field type="number" required>
          Numbers
        </Field>

        <Field type="select" name="Cars" id="cars">
          <option disabled defaultValue=""></option>
          {options.map(option => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </Field>

        <Field type="textarea">Text Area</Field>

        <Field type="drag-drop">File</Field>

        <Field type="radio" name="Radio" />

        <Field type="checkbox" name="Checkbox" />

        <Field type="text">
          Initial
        </Field>

      </FlowForm>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
